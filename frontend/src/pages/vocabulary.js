/**
 * Vocabulary Page - 英検級別単語フラッシュカード
 */
import { eikenLevels, getEikenLevel } from '../data/vocabulary.js';
import { ttsService } from '../services/tts.js';
import { storage } from '../services/storage.js';

let currentLevel = null;
let currentWordIndex = 0;
let isFlipped = false;
let showingWords = []; // 現在表示中の単語リスト

export function renderVocabularyLevels(container) {
    container.innerHTML = `
    <div class="animate-fade-in">
      <div class="page-header">
        <div style="display:flex;align-items:center;gap:var(--space-4)">
          <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('home')">←</button>
          <div>
            <h1 class="page-title">📚 英検級別・単語帳</h1>
            <p class="page-subtitle">旅行で使える頻出英単語をマスター</p>
          </div>
        </div>
      </div>

      <div class="lesson-grid">
        ${eikenLevels.map((level, i) => `
          <div class="card card-clickable animate-slide-up stagger-${i + 1}" onclick="window.navigateTo('vocabulary', '${level.id}')" style="border-top: 4px solid ${level.color}">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:var(--space-2)">
              <div style="font-size:var(--text-4xl)">${level.icon}</div>
              <span class="badge" style="background:${level.color}20;color:${level.color}">${level.words.length} words</span>
            </div>
            <div class="card-title" style="margin-top:var(--space-3)">${level.title} <span style="font-size:var(--text-sm);color:var(--text-muted);font-weight:400">(${level.subtitle})</span></div>
            <div class="card-subtitle">${level.description}</div>
            
            <div style="margin-top:var(--space-4);color:var(--text-accent);font-weight:600;font-size:var(--text-sm);display:flex;align-items:center;gap:var(--space-2)">
              フラッシュカードを開始 <span style="font-size:1.2em">→</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function renderVocabularyFlashcards(container, params) {
    const levelId = params[0];
    currentLevel = getEikenLevel(levelId);

    if (!currentLevel) {
        container.innerHTML = '<div class="empty-state">単語帳が見つかりません。</div>';
        return;
    }

    // シャッフルボタン用のリストコピーを作成
    showingWords = [...currentLevel.words];
    currentWordIndex = 0;
    isFlipped = false;

    renderFlashcardView(container);
}

function renderFlashcardView(container) {
    const wordCount = showingWords.length;
    const word = showingWords[currentWordIndex];
    const progress = ((currentWordIndex) / wordCount) * 100;

    // Flashcard CSS injection (if not already in index.css)
    const flashcardStyle = `
    <style>
      .flashcard-container {
        perspective: 1000px;
        width: 100%;
        max-width: 500px;
        height: 350px;
        margin: 0 auto;
        cursor: pointer;
      }
      .flashcard {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        transform-style: preserve-3d;
      }
      .flashcard.flipped {
        transform: rotateY(180deg);
      }
      .flashcard-face {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: var(--radius-xl);
        padding: var(--space-8);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: var(--bg-surface);
        border: 1px solid var(--border-color);
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      }
      .flashcard-back {
        transform: rotateY(180deg);
        background: linear-gradient(145deg, var(--bg-surface), #1a1e26);
        border-color: var(--color-primary);
      }
      .fc-word { font-size: 3rem; font-weight: 800; font-family: var(--font-display); margin-bottom: var(--space-2); color: var(--color-primary); }
      .fc-pos { font-size: var(--text-sm); color: var(--text-muted); padding: 2px 8px; background: rgba(255,255,255,0.05); border-radius: 12px; margin-bottom: var(--space-6); }
      .fc-meaning { font-size: 2.2rem; font-weight: 700; margin-bottom: var(--space-4); }
      .fc-example-box { background: rgba(0,0,0,0.2); padding: var(--space-4); border-radius: var(--radius-lg); width: 100%; text-align: left; border-left: 3px solid var(--color-accent); }
      .fc-example-en { font-size: var(--text-base); font-weight: 500; margin-bottom: var(--space-1); }
      .fc-example-ja { font-size: var(--text-sm); color: var(--text-secondary); }
    </style>
  `;

    container.innerHTML = `
    ${flashcardStyle}
    <div class="animate-fade-in">
      
      <!-- Header -->
      <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-6)">
        <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('vocabulary')">←</button>
        <div style="flex:1">
          <div class="progress-bar">
            <div class="progress-bar-fill" style="width:${progress}%;background:${currentLevel.color}"></div>
          </div>
        </div>
        <span style="font-size:var(--text-sm);color:var(--text-secondary);font-variant-numeric: tabular-nums;">${currentWordIndex + 1} / ${wordCount}</span>
      </div>

      <!-- Controls -->
      <div style="display:flex;justify-content:center;gap:var(--space-4);margin-bottom:var(--space-6)">
        <button class="btn btn-ghost btn-sm" id="btn-shuffle">🔀 シャッフル</button>
      </div>

      <!-- Flashcard -->
      <div class="flashcard-container" id="flashcard-container">
        <div class="flashcard ${isFlipped ? 'flipped' : ''}" id="flashcard">
          
          <!-- Front (English) -->
          <div class="flashcard-face flashcard-front">
            <div class="fc-word">${word.en}</div>
            <div class="fc-pos">${word.pos}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted);display:flex;align-items:center;gap:var(--space-2)">
              <span style="font-size:1.5em">👆</span> タップして意味を見る
            </div>
            
            <button class="btn btn-icon-sm" id="btn-speak-word" style="position:absolute;bottom:var(--space-4);right:var(--space-4);background:rgba(255,255,255,0.1)">
              🔊
            </button>
          </div>
          
          <!-- Back (Japanese + Example) -->
          <div class="flashcard-face flashcard-back">
            <div class="fc-meaning">${word.ja}</div>
            <div class="fc-pos">${word.pos}</div>
            
            <div class="fc-example-box">
              <div class="fc-example-en">${word.example} <button class="btn btn-icon-sm" id="btn-speak-example" style="width:24px;height:24px;min-width:0;font-size:12px;background:none;color:var(--color-primary)">🔊</button></div>
              <div class="fc-example-ja">${word.exampleJa}</div>
            </div>
          </div>
          
        </div>
      </div>

      <!-- Navigation -->
      <div style="display:flex;justify-content:center;align-items:center;gap:var(--space-8);margin-top:var(--space-8)">
        <button class="btn ${currentWordIndex === 0 ? 'btn-disabled' : 'btn-ghost'} btn-lg" id="btn-prev" ${currentWordIndex === 0 ? 'disabled' : ''}>← 前へ</button>
        <button class="btn btn-primary btn-lg" id="btn-next" style="min-width: 150px;">
          ${currentWordIndex === wordCount - 1 ? '完了 🎉' : '次へ →'}
        </button>
      </div>
      
      <p style="text-align:center;color:var(--text-muted);font-size:var(--text-xs);margin-top:var(--space-4)">
        💡 キーボードの[Space]で裏返し、[←][→]で移動できます
      </p>

    </div>
  `;

    // --- Events ---
    const flashcard = document.getElementById('flashcard');
    const containerEl = document.getElementById('flashcard-container');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');

    // Flip card
    const toggleFlip = (e) => {
        // ボタンのクリック時は無視
        if (e.target.closest('button')) return;
        isFlipped = !isFlipped;
        flashcard.classList.toggle('flipped', isFlipped);

        // 裏面を開いたら例文を読み上げ（設定に応じて）
        if (isFlipped) setTimeout(() => ttsService.speak(word.example), 300);
    };
    containerEl.addEventListener('click', toggleFlip);

    // Audio Buttons
    document.getElementById('btn-speak-word')?.addEventListener('click', (e) => {
        e.stopPropagation();
        ttsService.speak(word.en);
    });
    document.getElementById('btn-speak-example')?.addEventListener('click', (e) => {
        e.stopPropagation();
        ttsService.speak(word.example);
    });

    // Next / Prev
    const goNext = () => {
        if (currentWordIndex < wordCount - 1) {
            currentWordIndex++;
            isFlipped = false;
            renderFlashcardView(container);
        } else {
            // 完了時
            storage.addXP(20);
            window.navigateTo('vocabulary');
            setTimeout(() => alert(`🎉 ${currentLevel.title} の学習完了！ +20 XP`), 100);
        }
    };

    const goPrev = () => {
        if (currentWordIndex > 0) {
            currentWordIndex--;
            isFlipped = false;
            renderFlashcardView(container);
        }
    };

    btnNext.addEventListener('click', goNext);
    btnPrev.addEventListener('click', goPrev);

    // Keyboard Navigation
    const handleKeydown = (e) => {
        if (e.key === ' ') { e.preventDefault(); toggleFlip(e); }
        if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    };
    document.addEventListener('keydown', handleKeydown);

    // Shuffle Action
    document.getElementById('btn-shuffle')?.addEventListener('click', () => {
        const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);
        showingWords = shuffleArray(currentLevel.words);
        currentWordIndex = 0;
        isFlipped = false;
        renderFlashcardView(container);
    });

    // Cleanup event listener on unmount/re-render is handled by router usually, 
    // but to prevent duplicate listeners on navigation within this view:
    const cleanup = () => document.removeEventListener('keydown', handleKeydown);

    // A small hack: since we re-render entirely, overwrite the method to self-clean
    const oldOnClick = btnNext.onclick;
    btnNext.onclick = (e) => { cleanup(); if (oldOnClick) oldOnClick(e); };
    btnPrev.onclick = (e) => { cleanup(); if (oldOnClick) oldOnClick(e); };

    // Initial speech on load
    if (currentWordIndex === 0 && !isFlipped) {
        setTimeout(() => ttsService.speak(word.en), 300);
    }
}
