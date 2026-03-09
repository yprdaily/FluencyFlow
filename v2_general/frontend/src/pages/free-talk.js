/**
 * Free Talk Page - AIフリートーク
 */
import { ollamaService } from '../services/ollama.js';
import { ttsService } from '../services/tts.js';
import { sttService } from '../services/stt.js';
import { storage } from '../services/storage.js';
import { showToast, escapeHtml } from '../utils/helpers.js';

const CONVERSATION_STARTERS = [
  { text: "Tell me about yourself.", ja: "自己紹介してください。" },
  { text: "What's a good way to study English?", ja: "英語の勉強法を教えて！" },
  { text: "Can you recommend a good movie?", ja: "おすすめの映画は？" },
  { text: "I want to practice ordering food.", ja: "食事の注文を練習したい。" },
  { text: "Let's talk about travel!", ja: "旅行について話そう！" },
];

export function renderFreeTalk(container) {
  container.innerHTML = `
    <div class="animate-fade-in">
      <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-4)">
        <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('conversations')">←</button>
        <div>
          <h2 style="font-size:var(--text-xl)">🤖 AIフリートーク</h2>
          <p style="font-size:var(--text-sm);color:var(--text-secondary)">AIと英語で自由に会話練習</p>
        </div>
        <div style="margin-left:auto">
          <span class="badge ${ollamaService.available ? 'badge-success' : 'badge-locked'}" id="ai-status">
            ${ollamaService.available ? '🟢 AI接続中' : '🔴 AI未接続'}
          </span>
        </div>
      </div>

      <div class="card" style="padding:0;overflow:hidden">
        <div class="chat-container" id="ft-messages" style="min-height:450px;max-height:550px;overflow-y:auto">
          ${!ollamaService.available ? `
            <div class="chat-bubble chat-bubble-system">
              ⚠️ Ollamaが接続されていません。<br>
              AIフリートークを使うにはOllamaをインストールして起動してください。<br>
              <code style="font-size:var(--text-xs)">ollama serve</code> → <code style="font-size:var(--text-xs)">ollama pull llama3.2</code>
            </div>
          ` : `
            <div class="chat-bubble chat-bubble-ai">
              <div class="chat-speaker">🤖 AI Tutor</div>
              <div>Hi there! 🚀 I'm your English conversation partner. I'll help you practice spoken English for everyday situations! Feel free to talk about anything. I'll gently correct any mistakes and teach you useful expressions.</div>
              <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--space-1)">こんにちは！英会話パートナーです。日常英会話の練習をお手伝いします！何でも話してみてください。間違いを優しく直して、役立つ表現を教えますよ。</div>
            </div>
          `}
        </div>

        ${ollamaService.available ? `
          <!-- Starter suggestions -->
          <div id="ft-starters" style="padding:var(--space-3) var(--space-4);border-top:1px solid var(--border-color)">
            <div style="font-size:var(--text-xs);color:var(--text-muted);margin-bottom:var(--space-2)">会話のきっかけ:</div>
            <div style="display:flex;flex-wrap:wrap;gap:var(--space-2)">
              ${CONVERSATION_STARTERS.map(s => `
                <button class="btn btn-sm btn-ghost starter-btn" data-text="${s.text}" title="${s.ja}">${s.text}</button>
              `).join('')}
            </div>
          </div>

          <!-- Input Area -->
          <div class="chat-input-area">
            <input type="text" class="chat-input" id="ft-input" placeholder="英語で入力..." />
            <button class="mic-btn" id="ft-mic" style="width:44px;height:44px;font-size:var(--text-base)">🎤</button>
            <button class="btn btn-primary" id="ft-send">送信</button>
          </div>
          <div id="ft-interim" style="padding:0 var(--space-4) var(--space-2);font-size:var(--text-xs);color:var(--text-muted);min-height:16px"></div>
        ` : ''}
      </div>
    </div>
  `;

  if (!ollamaService.available) return;

  const input = document.getElementById('ft-input');
  const sendBtn = document.getElementById('ft-send');
  const micBtn = document.getElementById('ft-mic');
  const messagesDiv = document.getElementById('ft-messages');

  // Starter buttons
  document.querySelectorAll('.starter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.dataset.text;
      sendMessage();
      document.getElementById('ft-starters').style.display = 'none';
    });
  });

  // Send
  const sendMessage = async () => {
    const text = input.value.trim();
    if (!text) return;

    input.value = '';
    input.disabled = true;
    sendBtn.disabled = true;

    // Add user message
    addBubble(messagesDiv, text, 'user');

    // Show typing indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-bubble chat-bubble-ai';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = '<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
    messagesDiv.appendChild(typingDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    try {
      const reply = await ollamaService.chat(text, 'General English practice');

      // Remove typing indicator
      document.getElementById('typing-indicator')?.remove();

      // Add AI reply
      addBubble(messagesDiv, reply, 'ai');

      // Auto-speak the reply (just the English part)
      const englishPart = reply.split('(')[0].trim();
      ttsService.speak(englishPart);

      // XP for conversation
      storage.addXP(5);

    } catch (err) {
      document.getElementById('typing-indicator')?.remove();
      addBubble(messagesDiv, `エラー: ${err.message}`, 'system');
    }

    input.disabled = false;
    sendBtn.disabled = false;
    input.focus();
  };

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(); });

  // Mic
  micBtn.addEventListener('click', () => {
    if (sttService.isListening) {
      sttService.stopListening();
      micBtn.classList.remove('recording');
      return;
    }
    micBtn.classList.add('recording');
    document.getElementById('ft-interim').textContent = '🎤 聞いています...';
    sttService.startListening({
      onInterim: (text) => {
        document.getElementById('ft-interim').textContent = `🎤 ${text}`;
      },
      onResult: (text) => {
        input.value = text;
        document.getElementById('ft-interim').textContent = '';
        sendMessage();
      },
      onEnd: () => {
        micBtn.classList.remove('recording');
        document.getElementById('ft-interim').textContent = '';
      }
    });
  });

  input.focus();
}

function addBubble(container, text, type) {
  const div = document.createElement('div');
  if (type === 'user') {
    div.className = 'chat-bubble chat-bubble-user';
    div.innerHTML = `<div>${escapeHtml(text)}</div>`;
  } else if (type === 'ai') {
    div.className = 'chat-bubble chat-bubble-ai';
    div.innerHTML = `
      <div class="chat-speaker">🤖 AI Tutor</div>
      <div>${formatAIReply(text)}</div>
      <button class="btn btn-sm btn-ghost" style="margin-top:var(--space-2)" onclick="window._replayAudio(\`${text.split('(')[0].trim().replace(/`/g, "'")}\`)">🔊 聞く</button>
    `;
  } else {
    div.className = 'chat-bubble chat-bubble-system';
    div.innerHTML = text;
  }
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function formatAIReply(text) {
  // Separate Japanese translation if present
  const match = text.match(/^(.*?)(\([^)]+\))$/s);
  if (match) {
    return `
      <div>${escapeHtml(match[1].trim())}</div>
      <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--space-2)">${escapeHtml(match[2])}</div>
    `;
  }
  return escapeHtml(text);
}
