/**
 * Conversation Page - 会話シミュレーション一覧 + 会話実行
 */
import { conversations, getConversationById } from '../data/conversations.js';
import { ttsService } from '../services/tts.js';
import { sttService } from '../services/stt.js';
import { storage } from '../services/storage.js';
import { showToast, calculatePronunciationScore, showConfetti } from '../utils/helpers.js';

let currentConv = null;
let currentStep = 0;

export function renderConversations(container) {
  container.innerHTML = `
    <div class="animate-fade-in">
      <div class="page-header">
        <div style="display:flex;align-items:center;gap:var(--space-4)">
          <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('home')">←</button>
          <div>
            <h1 class="page-title">💬 会話シミュレーション</h1>
            <p class="page-subtitle">シチュエーション別のロールプレイで実践練習</p>
          </div>
        </div>
      </div>

      <div class="lesson-grid">
        ${conversations.map((conv, i) => {
    const completed = storage.get('conversationsCompleted')?.[conv.id]?.completed;
    return `
            <div class="card card-clickable animate-slide-up stagger-${i + 1}" onclick="window.navigateTo('conversation', '${conv.id}')">
              <div style="font-size:var(--text-4xl);margin-bottom:var(--space-3)">${conv.icon}</div>
              <div class="card-title">${conv.title}</div>
              <div class="card-subtitle">${conv.description}</div>
              <div style="margin-top:var(--space-3);display:flex;gap:var(--space-2)">
                <span class="badge ${conv.difficulty === 'beginner' ? 'badge-success' : 'badge-warning'}">
                  ${conv.difficulty === 'beginner' ? '初級' : '中級'}
                </span>
                <span class="badge badge-accent">+${conv.xpReward} XP</span>
                ${completed ? '<span class="badge badge-success">✅ 完了</span>' : ''}
              </div>
            </div>
          `;
  }).join('')}
      </div>

      <!-- Free Talk Link -->
      <div class="card" style="margin-top:var(--space-6);text-align:center;cursor:pointer" onclick="window.navigateTo('free-talk')">
        <div style="font-size:var(--text-4xl);margin-bottom:var(--space-3)">🤖</div>
        <div class="card-title">AIフリートーク</div>
        <div class="card-subtitle">AIと自由に英会話練習（Ollama必要）</div>
        <button class="btn btn-accent" style="margin-top:var(--space-4)">フリートークを開始</button>
      </div>
    </div>
  `;
}

export function renderConversation(container, params) {
  const convId = params[0];
  currentConv = getConversationById(convId);

  if (!currentConv) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">❓</div><div class="empty-state-text">会話シナリオが見つかりません</div></div>';
    return;
  }

  currentStep = 0;
  renderConvView(container);
}

function renderConvView(container) {
  const conv = currentConv;
  const progress = (currentStep / conv.steps.length) * 100;

  container.innerHTML = `
    <div class="animate-fade-in">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-4)">
        <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('conversations')">←</button>
        <div style="flex:1">
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width:${progress}%;background:var(--gradient-tropical)"></div>
          </div>
        </div>
      </div>

      <!-- Scene Info -->
      <div style="text-align:center;margin-bottom:var(--space-4)">
        <span class="badge badge-primary">📍 ${conv.scene}</span>
      </div>

      <!-- Chat Area -->
      <div class="card" style="padding:0;overflow:hidden">
        <div class="chat-container" id="chat-messages" style="min-height:400px;max-height:500px;overflow-y:auto"></div>
        
        <!-- User Input Area -->
        <div id="user-input-area" style="display:none"></div>
      </div>
    </div>
  `;

  // Start conversation
  playConversation();
}

async function playConversation() {
  const messagesDiv = document.getElementById('chat-messages');
  const inputArea = document.getElementById('user-input-area');

  for (let i = 0; i <= currentStep && i < currentConv.steps.length; i++) {
    const step = currentConv.steps[i];

    if (step.speaker === 'user' && i === currentStep) {
      // Show user input area
      showUserInput(step, inputArea, messagesDiv);
      return;
    }

    // Add AI message
    if (i === currentStep) {
      await addMessageAnimated(messagesDiv, step);
      // Auto-speak
      await ttsService.speak(step.text);
      currentStep++;

      // Check if next step exists
      if (currentStep < currentConv.steps.length) {
        setTimeout(() => playConversation(), 500);
      } else {
        completeConversation(messagesDiv);
      }
      return;
    } else {
      // Already shown
      addMessage(messagesDiv, step);
    }
  }
}

function addMessage(container, step) {
  const isUser = step.speaker === 'user';
  const div = document.createElement('div');
  div.className = `chat-bubble ${isUser ? 'chat-bubble-user' : 'chat-bubble-ai'}`;

  div.innerHTML = `
    ${!isUser ? `<div class="chat-speaker">${getSpeakerName(step.speaker)}</div>` : ''}
    <div>${step.text || step.expected}</div>
    <div style="font-size:var(--text-xs);color:${isUser ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)'};margin-top:var(--space-1)">${step.ja}</div>
  `;
  container.appendChild(div);
}

async function addMessageAnimated(container, step) {
  const div = document.createElement('div');
  div.className = `chat-bubble chat-bubble-ai`;
  div.innerHTML = `
    <div class="chat-speaker">${getSpeakerName(step.speaker)}</div>
    <div>${step.text}</div>
    <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--space-1)">${step.ja}</div>
    <button class="btn btn-sm btn-ghost" style="margin-top:var(--space-2)" onclick="window._replayAudio('${step.text.replace(/'/g, "\\'")}')">🔊 もう一度聞く</button>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

// Global replay function
window._replayAudio = (text) => ttsService.speak(text);

function showUserInput(step, inputArea, messagesDiv) {
  inputArea.style.display = 'block';
  inputArea.innerHTML = `
    <div style="padding:var(--space-4);background:var(--bg-surface);border-top:1px solid var(--border-color)">
      <div style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-3)">
        💡 あなたの番です: 「${step.ja}」
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);margin-bottom:var(--space-3)">
        ${step.hints.map((hint, i) => `
          <button class="btn btn-sm btn-ghost hint-btn" data-hint="${hint}">${hint}</button>
        `).join('')}
      </div>
      <div style="display:flex;gap:var(--space-3)">
        <input type="text" class="chat-input" id="conv-input" placeholder="英語で入力するか、マイクで話してください..." />
        <button class="mic-btn" id="conv-mic" style="width:48px;height:48px;font-size:var(--text-lg)">🎤</button>
        <button class="btn btn-primary" id="conv-send">送信</button>
      </div>
      <div id="conv-interim" style="font-size:var(--text-sm);color:var(--text-muted);margin-top:var(--space-2);min-height:20px"></div>
    </div>
  `;

  const input = document.getElementById('conv-input');
  const sendBtn = document.getElementById('conv-send');
  const micBtn = document.getElementById('conv-mic');

  // Hint buttons
  document.querySelectorAll('.hint-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.dataset.hint;
    });
  });

  // Send
  const handleSend = () => {
    const text = input.value.trim();
    if (!text) return;
    handleUserResponse(text, step, messagesDiv, inputArea);
  };

  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSend(); });

  // Mic
  micBtn.addEventListener('click', () => {
    if (sttService.isListening) {
      sttService.stopListening();
      micBtn.classList.remove('recording');
      return;
    }
    micBtn.classList.add('recording');
    document.getElementById('conv-interim').textContent = '🎤 聞いています...';
    sttService.startListening({
      onInterim: (text) => {
        document.getElementById('conv-interim').textContent = `🎤 ${text}`;
      },
      onResult: (text) => {
        input.value = text;
        document.getElementById('conv-interim').textContent = '';
        handleUserResponse(text, step, messagesDiv, inputArea);
      },
      onEnd: () => {
        micBtn.classList.remove('recording');
        document.getElementById('conv-interim').textContent = '';
      }
    });
  });

  input.focus();
}

function handleUserResponse(text, step, messagesDiv, inputArea) {
  // Add user message
  const div = document.createElement('div');
  div.className = 'chat-bubble chat-bubble-user';
  div.innerHTML = `<div>${text}</div>`;
  messagesDiv.appendChild(div);

  // Check pronunciation score
  const scoreResult = calculatePronunciationScore(step.expected, text);

  if (scoreResult.score < 90) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'chat-bubble chat-bubble-system';
    feedbackDiv.innerHTML = `${scoreResult.emoji} ${scoreResult.score}% — お手本: "${step.expected}"`;
    messagesDiv.appendChild(feedbackDiv);
  }

  inputArea.style.display = 'none';
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Move to next step
  currentStep++;
  setTimeout(() => playConversation(), 800);
}

function completeConversation(messagesDiv) {
  const conv = currentConv;
  storage.completeConversation(conv.id);
  storage.addXP(conv.xpReward);
  storage.updateStreak();
  showConfetti();
  showToast(`会話完了！+${conv.xpReward} XP`, 'xp');

  const completionDiv = document.createElement('div');
  completionDiv.className = 'chat-bubble chat-bubble-system';
  completionDiv.innerHTML = `
    🎉 会話完了！ +${conv.xpReward} XP<br>
    <button class="btn btn-sm btn-primary" style="margin-top:var(--space-2)" onclick="window.navigateTo('conversations')">戻る</button>
  `;
  messagesDiv.appendChild(completionDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getSpeakerName(speaker) {
  const names = {
    officer: '👮 入国審査官',
    staff: '🏨 フロントスタッフ',
    server: '🍽️ ウェイター',
    instructor: '🏄 インストラクター',
    clerk: '🛍️ 店員',
    stranger: '☕ 相手',
    agent: '🏠 不動産エージェント',
    doctor: '🏥 ドクター',
  };
  return names[speaker] || '💬 相手';
}
