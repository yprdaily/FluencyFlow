/**
 * Quiz Page - クイズ画面
 * 対応問題タイプ: choice（選択）, fill（穴埋め）, listen（リスニング）, order（語順並べ替え）
 */
import { getQuizByLessonId } from '../data/quizzes.js';
import { getLessonById } from '../data/lessons.js';
import { ttsService } from '../services/tts.js';
import { storage } from '../services/storage.js';
import { showToast, showXpFloat, showConfetti, shuffleArray } from '../utils/helpers.js';

let quizData = [];
let currentQ = 0;
let score = 0;
let answered = false;

export function renderQuiz(container, params) {
  const lessonId = params[0];
  const lesson = getLessonById(lessonId);
  quizData = getQuizByLessonId(lessonId);

  if (!quizData.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📝</div>
        <div class="empty-state-text">このレッスンのクイズはまだありません</div>
        <button class="btn btn-primary" onclick="window.navigateTo('home')">ホームに戻る</button>
      </div>
    `;
    return;
  }

  currentQ = 0;
  score = 0;
  answered = false;
  renderQuestion(container, lesson);
}

function renderQuestion(container, lesson) {
  const q = quizData[currentQ];
  const total = quizData.length;
  const progress = ((currentQ) / total) * 100;
  answered = false;

  const typeLabels = {
    choice: '📋 選択問題',
    fill: '✏️ 穴埋め問題',
    listen: '🎧 リスニング問題',
    order: '🔤 並べ替え問題',
  };
  const typeBadgeClass = {
    choice: 'badge-primary',
    fill: 'badge-warning',
    listen: 'badge-accent',
    order: 'badge-success',
  };

  container.innerHTML = `
    <div class="animate-fade-in">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-6)">
        <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('home')">←</button>
        <div style="flex:1">
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width:${progress}%;background:var(--gradient-sunset)"></div>
          </div>
        </div>
        <span style="font-size:var(--text-sm);color:var(--text-secondary)">${currentQ + 1}/${total}</span>
      </div>

      <!-- Question Type Badge -->
      <div style="text-align:center;margin-bottom:var(--space-4)">
        <span class="badge ${typeBadgeClass[q.type] || 'badge-primary'}">
          ${typeLabels[q.type] || '📋 問題'}
        </span>
      </div>

      <!-- Question -->
      <div class="card" style="text-align:center;padding:var(--space-8);margin-bottom:var(--space-6)">
        ${q.type === 'listen' ? `
          <button class="btn btn-primary btn-lg" id="listen-play" style="margin-bottom:var(--space-6)">
            🔊 音声を聞く
          </button>
        ` : ''}
        <h3 style="font-size:var(--text-xl);line-height:1.6;margin-bottom:var(--space-2)">${q.question}</h3>
      </div>

      <!-- Answer Area -->
      ${renderAnswerArea(q)}

      <!-- Feedback Area -->
      <div id="quiz-feedback" style="display:none;margin-top:var(--space-4)"></div>

      <!-- Next Button (hidden until answered) -->
      <div id="quiz-next" style="display:none;text-align:center;margin-top:var(--space-6)">
        ${currentQ < total - 1 ? `
          <button class="btn btn-primary btn-lg" id="next-q-btn">次の問題 →</button>
        ` : `
          <button class="btn btn-accent btn-lg" id="finish-btn">結果を見る 🎉</button>
        `}
      </div>
    </div>
  `;

  // Event listeners
  if (q.type === 'listen') {
    document.getElementById('listen-play')?.addEventListener('click', () => {
      ttsService.speak(q.phrase);
    });
    setTimeout(() => ttsService.speak(q.phrase), 500);
  }

  if (q.type === 'choice' || q.type === 'listen') {
    document.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => handleChoiceAnswer(btn, q, lesson));
    });
  }

  if (q.type === 'fill') {
    const input = document.getElementById('fill-input');
    const submitBtn = document.getElementById('fill-submit');
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleFillAnswer(input.value, q, lesson);
    });
    submitBtn?.addEventListener('click', () => handleFillAnswer(input.value, q, lesson));
  }

  if (q.type === 'order') {
    setupOrderQuestion(q, lesson);
  }

  document.getElementById('next-q-btn')?.addEventListener('click', () => {
    currentQ++;
    renderQuestion(container, lesson);
  });

  document.getElementById('finish-btn')?.addEventListener('click', () => {
    renderQuizResult(container, lesson);
  });
}

// ===================================================================
// Render helpers per question type
// ===================================================================

function renderAnswerArea(q) {
  switch (q.type) {
    case 'choice':
    case 'listen':
      return renderChoiceQuestion(q);
    case 'fill':
      return renderFillQuestion(q);
    case 'order':
      return renderOrderQuestion(q);
    default:
      return `<div class="empty-state"><div class="empty-state-text">不明な問題タイプ</div></div>`;
  }
}

function renderChoiceQuestion(q) {
  const keys = ['A', 'B', 'C', 'D'];
  return `
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <button class="quiz-option" data-index="${i}">
          <span class="quiz-option-key">${keys[i]}</span>
          <span>${opt}</span>
        </button>
      `).join('')}
    </div>
  `;
}

function renderFillQuestion(q) {
  return `
    <div style="text-align:center">
      ${q.hint ? `<p style="color:var(--text-muted);font-size:var(--text-sm);margin-bottom:var(--space-3)">ヒント: ${q.hint}</p>` : ''}
      <div style="display:flex;gap:var(--space-3);justify-content:center">
        <input type="text" id="fill-input" class="chat-input" style="max-width:300px" placeholder="英語で入力..." autocomplete="off" />
        <button class="btn btn-primary" id="fill-submit">回答</button>
      </div>
    </div>
  `;
}

function renderOrderQuestion(q) {
  const shuffled = shuffleArray([...q.words]);
  return `
    <div style="text-align:center">
      <div id="order-result" style="min-height:52px;padding:var(--space-4);background:var(--bg-input);border:2px dashed var(--border-color);border-radius:var(--radius-lg);margin-bottom:var(--space-4);display:flex;flex-wrap:wrap;gap:var(--space-2);justify-content:center;align-items:center">
        <span style="color:var(--text-muted);font-size:var(--text-sm)" id="order-placeholder">ここに単語を並べてください</span>
      </div>
      <div id="order-pool" style="display:flex;flex-wrap:wrap;gap:var(--space-2);justify-content:center;margin-bottom:var(--space-4)">
        ${shuffled.map((word, i) => `
          <button class="btn btn-ghost order-word" data-word="${word}" data-index="${i}" style="font-size:var(--text-base);padding:var(--space-2) var(--space-4)">
            ${word}
          </button>
        `).join('')}
      </div>
      <div style="display:flex;gap:var(--space-3);justify-content:center">
        <button class="btn btn-ghost" id="order-reset">🔄 やり直し</button>
        <button class="btn btn-primary" id="order-submit">回答する</button>
      </div>
    </div>
  `;
}

// ===================================================================
// Answer handlers
// ===================================================================

function handleChoiceAnswer(btn, q, lesson) {
  if (answered) return;
  answered = true;

  const idx = parseInt(btn.dataset.index);
  const correct = idx === q.answer;

  if (correct) {
    btn.classList.add('correct');
    score++;
    showToast('正解！🎉', 'success');
  } else {
    btn.classList.add('incorrect');
    document.querySelectorAll('.quiz-option')[q.answer]?.classList.add('correct');
    showToast('残念...', 'error');
  }

  showFeedback(correct, q);
  document.getElementById('quiz-next').style.display = 'block';
}

function handleFillAnswer(value, q, lesson) {
  if (answered || !value.trim()) return;
  answered = true;

  const userAnswer = value.trim().toLowerCase().replace(/[.,!?;:']/g, '');
  const correctAnswer = q.answer.toLowerCase().replace(/[.,!?;:']/g, '');
  const correct = userAnswer === correctAnswer;

  const input = document.getElementById('fill-input');
  input.disabled = true;
  input.style.borderColor = correct ? 'var(--color-success)' : 'var(--color-error)';

  if (correct) {
    score++;
    showToast('正解！🎉', 'success');
  } else {
    showToast(`正解: ${q.answer}`, 'error');
  }

  showFeedback(correct, q);
  document.getElementById('quiz-next').style.display = 'block';
}

function setupOrderQuestion(q, lesson) {
  const resultDiv = document.getElementById('order-result');
  const poolDiv = document.getElementById('order-pool');
  let selectedWords = [];

  // Click word to add to result
  poolDiv.addEventListener('click', (e) => {
    const btn = e.target.closest('.order-word');
    if (!btn || answered) return;

    const word = btn.dataset.word;
    selectedWords.push(word);
    btn.style.opacity = '0.3';
    btn.style.pointerEvents = 'none';

    updateOrderDisplay(resultDiv, selectedWords);
  });

  // Click word in result to remove
  resultDiv.addEventListener('click', (e) => {
    const btn = e.target.closest('.order-selected');
    if (!btn || answered) return;

    const word = btn.dataset.word;
    const idx = btn.dataset.origIndex;
    selectedWords = selectedWords.filter((_, i) => i !== parseInt(btn.dataset.selectedIndex));

    // Re-enable in pool
    const poolBtn = poolDiv.querySelector(`.order-word[data-index="${idx}"]`);
    if (poolBtn) {
      poolBtn.style.opacity = '1';
      poolBtn.style.pointerEvents = 'auto';
    }

    updateOrderDisplay(resultDiv, selectedWords);
  });

  // Reset
  document.getElementById('order-reset')?.addEventListener('click', () => {
    if (answered) return;
    selectedWords = [];
    poolDiv.querySelectorAll('.order-word').forEach(btn => {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    });
    updateOrderDisplay(resultDiv, selectedWords);
  });

  // Submit
  document.getElementById('order-submit')?.addEventListener('click', () => {
    if (answered || selectedWords.length === 0) return;
    answered = true;

    const userAnswer = selectedWords.join(' ').toLowerCase();
    const correctAnswer = q.answer.toLowerCase();
    const correct = userAnswer === correctAnswer;

    if (correct) {
      score++;
      resultDiv.style.borderColor = 'var(--color-success)';
      resultDiv.style.background = 'var(--color-success-bg)';
      showToast('正解！🎉', 'success');
    } else {
      resultDiv.style.borderColor = 'var(--color-error)';
      resultDiv.style.background = 'var(--color-error-bg)';
      showToast('残念...', 'error');
    }

    showFeedback(correct, q);
    document.getElementById('quiz-next').style.display = 'block';
  });
}

function updateOrderDisplay(container, words) {
  if (words.length === 0) {
    container.innerHTML = '<span style="color:var(--text-muted);font-size:var(--text-sm)" id="order-placeholder">ここに単語を並べてください</span>';
  } else {
    container.innerHTML = words.map((w, i) => `
      <button class="btn btn-sm btn-primary order-selected" data-word="${w}" data-selected-index="${i}" style="font-size:var(--text-base)">
        ${w}
      </button>
    `).join('');
  }
}

// ===================================================================
// Feedback & Results
// ===================================================================

function showFeedback(correct, q) {
  const feedbackDiv = document.getElementById('quiz-feedback');
  feedbackDiv.style.display = 'block';
  feedbackDiv.innerHTML = `
    <div class="card animate-slide-up" style="border-left:3px solid ${correct ? 'var(--color-success)' : 'var(--color-error)'}">
      <div style="font-weight:600;margin-bottom:var(--space-2);color:${correct ? 'var(--color-success)' : 'var(--color-error)'}">
        ${correct ? '✅ 正解！' : '❌ 不正解'}
      </div>
      ${!correct && q.type === 'order' ? `<div style="font-size:var(--text-sm);color:var(--text-primary);margin-bottom:var(--space-2)">正しい語順: <strong>"${q.answer}"</strong></div>` : ''}
      ${q.explanation ? `<div style="font-size:var(--text-sm);color:var(--text-secondary)">${q.explanation}</div>` : ''}
    </div>
  `;
}

function renderQuizResult(container, lesson) {
  const total = quizData.length;
  const pct = Math.round((score / total) * 100);
  const xpGained = Math.round((score / total) * 30);

  if (xpGained > 0) {
    storage.addXP(xpGained);
    storage.saveQuizScore(lesson.id, pct);
  }

  if (pct >= 80) showConfetti();

  container.innerHTML = `
    <div class="animate-scale-in" style="text-align:center;padding:var(--space-8) 0">
      <div style="font-size:5rem;margin-bottom:var(--space-4)">
        ${pct >= 80 ? '🎉' : pct >= 50 ? '😊' : '💪'}
      </div>
      <h2 style="font-size:var(--text-3xl);margin-bottom:var(--space-4)">クイズ結果</h2>

      <div class="pronunciation-score" style="max-width:300px;margin:0 auto var(--space-6)">
        <div class="score-circle" style="--score-color:${pct >= 80 ? 'var(--color-success)' : pct >= 50 ? 'var(--color-warning)' : 'var(--color-error)'};--score-pct:${pct};color:${pct >= 80 ? 'var(--color-success)' : pct >= 50 ? 'var(--color-warning)' : 'var(--color-error)'}">
          ${pct}%
        </div>
        <div class="score-label">${score} / ${total} 問正解</div>
        ${xpGained > 0 ? `<div style="color:var(--color-xp);font-weight:700">+${xpGained} XP</div>` : ''}
      </div>

      <p style="color:var(--text-secondary);font-size:var(--text-sm);margin-bottom:var(--space-6)">
        💡 もう一度挑戦すると問題の順番と選択肢がシャッフルされます
      </p>

      <div style="display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
        <button class="btn btn-ghost" onclick="window.navigateTo('home')">ホームに戻る</button>
        <button class="btn btn-primary" onclick="window.navigateTo('quiz', '${lesson.id}')">もう一度挑戦</button>
        ${pct < 80 ? `<button class="btn btn-accent" onclick="window.navigateTo('lesson', '${lesson.id}')">レッスンを復習</button>` : ''}
      </div>
    </div>
  `;
}
