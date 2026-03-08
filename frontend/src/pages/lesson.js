/**
 * Lesson Page - レッスン画面
 */
import { getLessonById } from '../data/lessons.js';
import { getQuizByLessonId } from '../data/quizzes.js';
import { ttsService } from '../services/tts.js';
import { sttService } from '../services/stt.js';
import { storage } from '../services/storage.js';
import { showToast, showXpFloat, calculatePronunciationScore, showConfetti } from '../utils/helpers.js';

let currentPhraseIndex = 0;
let lesson = null;

export function renderLesson(container, params) {
    const lessonId = params[0];
    lesson = getLessonById(lessonId);

    if (!lesson) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">❓</div><div class="empty-state-text">レッスンが見つかりません</div></div>';
        return;
    }

    currentPhraseIndex = 0;
    renderPhraseView(container);
}

function renderPhraseView(container) {
    const phrase = lesson.phrases[currentPhraseIndex];
    const total = lesson.phrases.length;
    const progress = ((currentPhraseIndex + 1) / total) * 100;

    container.innerHTML = `
    <div class="animate-fade-in">
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-6)">
        <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('home')">←</button>
        <div style="flex:1">
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width:${progress}%"></div>
          </div>
        </div>
        <span style="font-size:var(--text-sm);color:var(--text-secondary)">${currentPhraseIndex + 1}/${total}</span>
      </div>

      <!-- Lesson Title -->
      <div style="text-align:center;margin-bottom:var(--space-8)">
        <span style="font-size:var(--text-4xl)">${lesson.icon}</span>
        <h2 style="font-size:var(--text-xl);margin-top:var(--space-2)">${lesson.title}</h2>
        <p style="color:var(--text-secondary);font-size:var(--text-sm)">${lesson.stageTitle}</p>
      </div>

      <!-- Phrase Card -->
      <div class="card animate-scale-in" style="text-align:center;padding:var(--space-8)">
        <div class="phrase-en" style="font-size:var(--text-2xl);margin-bottom:var(--space-4)">${phrase.en}</div>
        <div class="phrase-ja" style="font-size:var(--text-lg);margin-bottom:var(--space-2)">${phrase.ja}</div>
        ${phrase.notes ? `<div style="font-size:var(--text-xs);color:var(--color-accent);margin-top:var(--space-2)">💡 ${phrase.notes}</div>` : ''}
        
        <!-- Audio Controls -->
        <div style="display:flex;justify-content:center;gap:var(--space-4);margin-top:var(--space-6)">
          <button class="btn btn-primary btn-icon" id="play-btn" title="音声を聞く">
            🔊
          </button>
          <button class="btn btn-primary btn-icon" id="slow-btn" title="ゆっくり聞く" style="background:var(--gradient-ocean)">
            🐢
          </button>
          <button class="mic-btn" id="mic-btn" title="発音を練習する">
            🎤
          </button>
        </div>

        <!-- Pronunciation Result -->
        <div id="pronunciation-result" style="margin-top:var(--space-6);display:none"></div>

        <!-- Interim text -->
        <div id="interim-text" style="margin-top:var(--space-4);font-size:var(--text-sm);color:var(--text-muted);min-height:24px"></div>
      </div>

      <!-- Navigation -->
      <div style="display:flex;justify-content:space-between;margin-top:var(--space-6)">
        <button class="btn btn-ghost" ${currentPhraseIndex === 0 ? 'disabled style="opacity:0.3"' : ''} id="prev-btn">
          ← 前へ
        </button>
        ${currentPhraseIndex < total - 1 ? `
          <button class="btn btn-primary" id="next-btn">次へ →</button>
        ` : `
          <button class="btn btn-accent btn-lg" id="complete-btn">
            🎉 レッスン完了！
          </button>
        `}
      </div>
    </div>
  `;

    // Event listeners
    document.getElementById('play-btn')?.addEventListener('click', () => {
        ttsService.speak(phrase.en);
    });

    document.getElementById('slow-btn')?.addEventListener('click', () => {
        ttsService.speak(phrase.en, { rate: '-30%' });
    });

    const micBtn = document.getElementById('mic-btn');
    micBtn?.addEventListener('click', () => {
        if (sttService.isListening) {
            sttService.stopListening();
            micBtn.classList.remove('recording');
            return;
        }

        micBtn.classList.add('recording');
        document.getElementById('interim-text').textContent = '🎤 聞いています...';
        document.getElementById('pronunciation-result').style.display = 'none';

        sttService.startListening({
            onInterim: (text) => {
                document.getElementById('interim-text').textContent = `🎤 ${text}`;
            },
            onResult: (text) => {
                document.getElementById('interim-text').textContent = '';
                showPronunciationResult(phrase.en, text);
            },
            onError: (err) => {
                document.getElementById('interim-text').textContent = '';
                if (err === 'not-allowed') {
                    showToast('マイクへのアクセスを許可してください', 'error');
                }
            },
            onEnd: () => {
                micBtn.classList.remove('recording');
            }
        });
    });

    document.getElementById('prev-btn')?.addEventListener('click', () => {
        if (currentPhraseIndex > 0) {
            currentPhraseIndex--;
            renderPhraseView(container);
        }
    });

    document.getElementById('next-btn')?.addEventListener('click', () => {
        currentPhraseIndex++;
        renderPhraseView(container);
    });

    document.getElementById('complete-btn')?.addEventListener('click', () => {
        completeLesson(container);
    });
}

function showPronunciationResult(expected, actual) {
    const result = calculatePronunciationScore(expected, actual);
    const resultDiv = document.getElementById('pronunciation-result');

    const scoreColor = result.score >= 90 ? 'var(--color-success)' :
        result.score >= 70 ? 'var(--color-primary)' :
            result.score >= 50 ? 'var(--color-warning)' : 'var(--color-error)';

    resultDiv.innerHTML = `
    <div class="pronunciation-score animate-scale-in">
      <div class="score-circle" style="--score-color:${scoreColor};--score-pct:${result.score};color:${scoreColor}">
        ${result.score}%
      </div>
      <div class="score-label">${result.emoji} ${result.message}</div>
      <div class="score-detail">
        <strong>あなた:</strong> "${actual}"<br>
        <strong>お手本:</strong> "${expected}"
      </div>
      <div style="margin-top:var(--space-3)">
        ${result.results.map(r => {
        if (r.status === 'match') return `<span class="word-match">${r.word}</span>`;
        if (r.status === 'close') return `<span class="word-match" style="opacity:0.7">${r.word}</span>`;
        if (r.status === 'miss') return `<span class="word-miss">${r.word}</span>`;
        if (r.status === 'missing') return `<span class="word-miss">${r.word}</span>`;
        return `<span class="word-extra">${r.word}</span>`;
    }).join(' ')}
      </div>
    </div>
  `;
    resultDiv.style.display = 'block';

    if (result.score >= 70) {
        showToast(`発音スコア: ${result.score}% ${result.emoji}`, 'success');
    }
}

function completeLesson(container) {
    const wasCompleted = storage.isLessonCompleted(lesson.id);
    storage.completeLesson(lesson.id, 100);
    storage.updateStreak();

    const xpGained = wasCompleted ? Math.floor(lesson.xpReward / 2) : lesson.xpReward;
    const result = storage.addXP(xpGained);

    showConfetti();
    showToast(`+${xpGained} XP 獲得！`, 'xp');

    // Show completion modal
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('hidden');
    overlay.innerHTML = `
    <div class="modal animate-scale-in">
      <div class="modal-icon">🎉</div>
      <div class="modal-title">レッスン完了！</div>
      <div class="modal-body">
        <div style="font-size:var(--text-3xl);font-weight:800;color:var(--color-xp);margin-bottom:var(--space-3)">
          +${xpGained} XP
        </div>
        <p>${lesson.title} を完了しました！</p>
        ${result.leveledUp ? `<p style="color:var(--color-accent);font-weight:700;margin-top:var(--space-2)">🎊 レベルアップ！ Lv.${result.level}</p>` : ''}
      </div>
      <div class="modal-actions">
        <button class="btn btn-ghost" id="modal-home">ホームに戻る</button>
        <button class="btn btn-primary" id="modal-quiz">クイズに挑戦 →</button>
      </div>
    </div>
  `;

    document.getElementById('modal-home').addEventListener('click', () => {
        overlay.classList.add('hidden');
        window.navigateTo('home');
    });

    document.getElementById('modal-quiz').addEventListener('click', () => {
        overlay.classList.add('hidden');
        window.navigateTo('quiz', lesson.id);
    });
}
