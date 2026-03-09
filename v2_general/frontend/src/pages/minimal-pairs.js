/**
 * Minimal Pairs Page - 発音・イントネーション比較
 */
import { pronunciationPairs } from '../data/minimal-pairs.js';
import { ttsService } from '../services/tts.js';

export function renderMinimalPairs(container) {
  let activeTab = 0;

  const renderContent = () => {
    const activeCategory = pronunciationPairs[activeTab];

    // CSS to handle dynamic number of comparison cards (2, 3, or more)
    const customStyle = `
      <style>
        .pair-card {
          display: flex;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: var(--space-4);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }
        .pair-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .pair-side {
          flex: 1;
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: background var(--transition-fast);
          position: relative;
        }
        .pair-side:not(:last-child) {
          border-right: 1px solid var(--border-color);
        }
        .pair-side:hover {
          background: rgba(255,255,255,0.05);
        }
        .pair-word {
          font-family: var(--font-display);
          font-size: var(--text-2xl);
          font-weight: 800;
          color: var(--color-primary);
          margin-bottom: var(--space-1);
        }
        .pair-phonetic {
          font-family: var(--font-mono);
          font-size: var(--text-sm);
          color: var(--text-muted);
          margin-bottom: var(--space-2);
        }
        .pair-ja {
          font-weight: 600;
          font-size: var(--text-base);
        }
        .pair-explanation {
          padding: var(--space-3) var(--space-4);
          background: rgba(0,0,0,0.03);
          border-top: 1px solid var(--border-color);
          font-size: var(--text-sm);
          color: var(--text-secondary);
          display: flex;
          gap: var(--space-2);
        }
        .tabs-wrapper {
          display: flex;
          gap: var(--space-2);
          overflow-x: auto;
          padding-bottom: var(--space-4);
          margin-bottom: var(--space-6);
          scrollbar-width: none;
          justify-content: flex-start; /* Fix for left-side clipping when overflowing */
          scroll-padding-left: var(--space-2);
        }
        .tabs-wrapper::-webkit-scrollbar {
          display: none;
        }
      </style>
    `;

    container.innerHTML = `
      ${customStyle}
      <div class="animate-fade-in">
        <div class="page-header">
          <div style="display:flex;align-items:center;gap:var(--space-4)">
            <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('home')">←</button>
            <div>
              <h1 class="page-title">🗣️ 発音・アクセント辞典</h1>
              <p class="page-subtitle">カタカナ発音の罠（agree/ugly等）を回避</p>
            </div>
          </div>
        </div>

        <!-- Tabs -->
        <div class="tabs-wrapper">
          ${pronunciationPairs.map((cat, i) => `
            <button class="btn ${i === activeTab ? 'btn-primary' : 'btn-ghost'} tab-btn" data-index="${i}" style="white-space:nowrap;border-radius:var(--radius-full); flex-shrink: 0;">
              ${cat.category}
            </button>
          `).join('')}
        </div>

        <!-- Main Content List -->
        <div>
          ${activeCategory.pairs.map((pair, i) => `
            <div class="pair-card shadow-sm animate-slide-up stagger-${(i % 5) + 1}" style="flex-direction: column;">
              
              <!-- Words Comparison -->
              <div style="display: flex; width: 100%; overflow-x: auto;">
                ${pair.words.map(word => `
                  <div class="pair-side btn-speak-pair" data-text="${word.en}">
                    <div class="pair-word">${word.en}</div>
                    <div class="pair-phonetic">${word.phonetic}</div>
                    <div class="pair-ja">${word.ja}</div>
                    <button class="btn" style="margin-top:var(--space-3);background:var(--color-primary-glow);color:var(--color-primary-dark); border-radius:var(--radius-full); padding:var(--space-2) var(--space-4); font-size:var(--text-sm); display:inline-flex; align-items:center; gap:var(--space-2);">🔊 聴く</button>
                  </div>
                `).join('')}
              </div>

              <!-- Explanation -->
              <div class="pair-explanation">
                <span>💡</span>
                <span style="line-height:1.5">${pair.explanation}</span>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    `;

    // Attach Tab Events
    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        activeTab = parseInt(e.currentTarget.dataset.index);
        renderContent();
      });
    });

    // Attach TTS Events - Click any side to pronounce
    container.querySelectorAll('.btn-speak-pair').forEach(el => {
      el.addEventListener('click', (e) => {
        const textToSpeak = e.currentTarget.dataset.text;
        ttsService.speak(textToSpeak);
      });
    });
  };

  renderContent();
}
