/**
 * Vocabulary Page V2 - SQLite辞書APIベースの無制限単語帳
 * 検索・CEFRレベルフィルタ・ページネーション・AI単語生成対応
 */
import { ttsService } from '../services/tts.js';
import { storage } from '../services/storage.js';

const API_BASE = '/api/dictionary';
let currentLevel = null;
let currentOffset = 0;
let currentQuery = '';
let allWords = [];
let isLoading = false;

const LEVEL_META = {
  A1: { title: 'A1 - 超基礎', icon: '🟢', color: '#22c55e', desc: '日常の最も基本的な表現。自己紹介、挨拶、数字、色。' },
  A2: { title: 'A2 - 基礎', icon: '🟡', color: '#eab308', desc: '買い物、道案内、簡単な意見交換ができる。' },
  B1: { title: 'B1 - 中級', icon: '🟠', color: '#f97316', desc: '旅行中の大半の場面で対応可能。意見を述べられる。' },
  B2: { title: 'B2 - 中上級', icon: '🔵', color: '#3b82f6', desc: 'ネイティブと流暢にやり取り可能。ニュース理解。' },
  C1: { title: 'C1 - 上級', icon: '🟣', color: '#8b5cf6', desc: '複雑な議論・ビジネス交渉・学術的な内容に対応。' },
  General: { title: '全て - 総合辞書', icon: '📚', color: '#ec4899', desc: '4万語以上の一般英単語・熟語を網羅。' },
};

export function renderVocabularyLevels(container) {
  container.innerHTML = `
    <div class="animate-fade-in">
      <div class="page-header">
        <div style="display:flex;align-items:center;gap:var(--space-4)">
          <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('home')">←</button>
          <div>
            <h1 class="page-title">📚 無制限辞書・単語帳</h1>
            <p class="page-subtitle">CEFRレベル別に学習、または検索して新単語をAI生成</p>
          </div>
        </div>
      </div>

      <!-- 検索バー -->
      <div class="card" style="margin-bottom:var(--space-6)">
        <div style="display:flex;gap:var(--space-3)">
          <input type="text" id="dict-search" class="input" placeholder="英単語を検索（例: beautiful, run, ...）"
                 style="flex:1;background:var(--bg-elevated);border:1px solid var(--border-color);border-radius:var(--radius-lg);padding:var(--space-3) var(--space-4);color:var(--text-primary);font-size:var(--text-base);">
          <button class="btn btn-primary" id="btn-search">🔍 検索</button>
        </div>
        <p style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--space-2)">
          💡 DB未登録の単語も、Ollamaが起動中であればAIが自動生成します
        </p>
      </div>

      <!-- レベルカード -->
      <div class="lesson-grid" id="level-cards">
        <div style="text-align:center;padding:var(--space-8);color:var(--text-muted)">読み込み中...</div>
      </div>
    </div>
  `;

  // 統計情報を取得してレベルカードを描画
  _fetchLevels(container);

  // 検索イベント
  document.getElementById('btn-search')?.addEventListener('click', () => {
    const q = document.getElementById('dict-search').value.trim();
    if (q.length > 0) _handleSearch(container, q);
  });

  document.getElementById('dict-search')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = e.target.value.trim();
      if (q.length > 0) _handleSearch(container, q);
    }
  });
}

async function _fetchLevels(container) {
  try {
    const res = await fetch(`${API_BASE}/stats`);
    const data = await res.json();

    const grid = document.getElementById('level-cards');
    if (!grid) return;

    const levelEntries = Object.entries(LEVEL_META);
    const levelCounts = {};
    (data.levels || []).forEach(l => { levelCounts[l.level] = l.count; });

    grid.innerHTML = `
          <div class="card" style="grid-column:1/-1;text-align:center;padding:var(--space-4)">
            <span style="font-size:var(--text-3xl);font-weight:800;color:var(--color-primary)">${data.total || 0}</span>
            <span style="font-size:var(--text-sm);color:var(--text-secondary);margin-left:var(--space-2)">語 登録済み</span>
          </div>
          ${levelEntries.map(([key, meta], i) => `
            <div class="card card-clickable animate-slide-up stagger-${i + 1}" onclick="window.navigateTo('vocabulary', '${key}')"
                 style="border-top: 4px solid ${meta.color}">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:var(--space-2)">
                <div style="font-size:var(--text-4xl)">${meta.icon}</div>
                <span class="badge" style="background:${meta.color}20;color:${meta.color}">${levelCounts[key] || 0} words</span>
              </div>
              <div class="card-title" style="margin-top:var(--space-3)">${meta.title}</div>
              <div class="card-subtitle">${meta.desc}</div>
              <div style="margin-top:var(--space-4);color:var(--text-accent);font-weight:600;font-size:var(--text-sm);display:flex;align-items:center;gap:var(--space-2)">
                単語一覧を見る <span style="font-size:1.2em">→</span>
              </div>
            </div>
          `).join('')}
        `;
  } catch (e) {
    const grid = document.getElementById('level-cards');
    if (grid) grid.innerHTML = `<div class="card" style="text-align:center;grid-column:1/-1;color:var(--text-muted)">
          ⚠️ バックエンドに接続できません。サーバーが起動しているか確認してください。
        </div>`;
  }
}

async function _handleSearch(container, query) {
  currentQuery = query;
  currentOffset = 0;

  // まず正確なルックアップを試みる（AI生成のトリガー）
  try {
    const exactRes = await fetch(`${API_BASE}/word/${encodeURIComponent(query)}`);
    if (exactRes.ok) {
      const exactData = await exactRes.json();
      _renderWordDetail(container, exactData.result, exactData.source);
      return;
    }
  } catch (e) { /* 404の場合は部分一致検索へ */ }

  // 部分一致検索
  try {
    const res = await fetch(`${API_BASE}/search?q=${encodeURIComponent(query)}&limit=50`);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      _renderSearchResults(container, data.results, query);
    } else {
      _renderNoResults(container, query);
    }
  } catch (e) {
    _renderNoResults(container, query);
  }
}

function _renderWordDetail(container, word, source) {
  const sourceLabel = source === 'ai' ? '🤖 AI生成' : '📖 辞書登録済み';
  container.innerHTML = `
    <div class="animate-fade-in">
      <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-6)">
        <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('vocabulary')">←</button>
        <h1 class="page-title">📖 単語詳細</h1>
        <span class="badge" style="background:var(--color-primary-glow);color:var(--color-primary-dark)">${sourceLabel}</span>
      </div>

      <div class="card" style="max-width:600px;margin:0 auto;text-align:center;padding:var(--space-8)">
        <div style="font-size:3rem;font-weight:800;color:var(--color-primary);margin-bottom:var(--space-2)">${word.word}</div>
        <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--space-2)">${word.phonetic || ''}</div>
        <div style="display:inline-block;padding:2px 10px;background:rgba(255,255,255,0.05);border-radius:12px;font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-4)">
          ${word.pos || ''}
        </div>
        <div style="font-size:2rem;font-weight:700;margin-bottom:var(--space-6)">${word.ja}</div>

        <button class="btn" style="margin-bottom:var(--space-6);background:var(--color-primary-glow);color:var(--color-primary-dark);border-radius:var(--radius-full);padding:var(--space-2) var(--space-6)"
                id="btn-speak-word">🔊 発音を聴く</button>

        ${word.example ? `
        <div style="background:rgba(0,0,0,0.15);padding:var(--space-4);border-radius:var(--radius-lg);text-align:left;border-left:3px solid var(--color-accent)">
          <div style="font-weight:500;margin-bottom:var(--space-1)">${word.example}</div>
          <div style="font-size:var(--text-sm);color:var(--text-secondary)">${word.example_ja || ''}</div>
        </div>
        ` : ''}

        <div style="margin-top:var(--space-4);font-size:var(--text-xs);color:var(--text-muted)">
          レベル: ${word.level || 'N/A'}
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-speak-word')?.addEventListener('click', () => {
    ttsService.speak(word.word);
  });
}

function _renderSearchResults(container, results, query) {
  container.innerHTML = `
    <div class="animate-fade-in">
      <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-6)">
        <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('vocabulary')">←</button>
        <h1 class="page-title">🔍 「${query}」の検索結果 (${results.length}件)</h1>
      </div>

      <div class="lesson-grid">
        ${results.map(w => `
          <div class="card card-clickable" onclick="window._vocabLookup('${w.word}')" style="padding:var(--space-4)">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div>
                <span style="font-weight:700;font-size:var(--text-lg);color:var(--color-primary)">${w.word}</span>
                <span style="font-size:var(--text-xs);color:var(--text-muted);margin-left:var(--space-2)">${w.phonetic || ''}</span>
              </div>
              <span class="badge" style="font-size:var(--text-xs)">${w.level}</span>
            </div>
            <div style="margin-top:var(--space-1);color:var(--text-secondary)">${w.ja}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  window._vocabLookup = (word) => _handleSearch(container, word);
}

function _renderNoResults(container, query) {
  container.innerHTML = `
    <div class="animate-fade-in" style="text-align:center;padding:var(--space-16)">
      <div style="font-size:4rem;margin-bottom:var(--space-4)">🤔</div>
      <h2>「${query}」は見つかりませんでした</h2>
      <p style="color:var(--text-muted);margin-top:var(--space-2)">Ollamaが起動中であれば、AIが自動的に単語情報を生成します。</p>
      <button class="btn btn-primary" style="margin-top:var(--space-6)" onclick="window.navigateTo('vocabulary')">← 単語帳に戻る</button>
    </div>
  `;
}


// === レベル別一覧表示 ===
export function renderVocabularyFlashcards(container, params) {
  const levelId = params[0];
  const meta = LEVEL_META[levelId];

  if (!meta) {
    container.innerHTML = '<div class="empty-state">レベルが見つかりません。</div>';
    return;
  }

  currentLevel = levelId;
  currentOffset = 0;
  allWords = [];

  container.innerHTML = `
    <div class="animate-fade-in">
      <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-6)">
        <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('vocabulary')">←</button>
        <div style="flex:1">
          <h1 class="page-title">${meta.icon} ${meta.title}</h1>
          <p class="page-subtitle">${meta.desc}</p>
        </div>
        <button class="btn btn-primary" onclick="window.navigateTo('quiz', 'dict:${levelId}')">🏆 クイズに挑戦</button>
      </div>

      <div class="lesson-grid" id="word-list">
        <div style="text-align:center;padding:var(--space-8);color:var(--text-muted);grid-column:1/-1">読み込み中...</div>
      </div>

      <div style="text-align:center;margin-top:var(--space-6)" id="load-more-container">
        <button class="btn btn-ghost" id="btn-load-more" style="display:none">もっと読み込む</button>
      </div>
    </div>
  `;

  _loadLevelWords(container, levelId);
}

async function _loadLevelWords(container, level) {
  if (isLoading) return;
  isLoading = true;

  try {
    const res = await fetch(`${API_BASE}/level/${level}?limit=50&offset=${currentOffset}`);
    const data = await res.json();

    allWords = allWords.concat(data.results || []);
    currentOffset += (data.results || []).length;

    const grid = document.getElementById('word-list');
    if (!grid) return;

    grid.innerHTML = allWords.map(w => `
          <div class="card card-clickable" onclick="window._vocabLookup('${w.word}')" style="padding:var(--space-4)">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div>
                <span style="font-weight:700;font-size:var(--text-lg);color:var(--color-primary)">${w.word}</span>
                <span style="font-size:var(--text-xs);color:var(--text-muted);margin-left:var(--space-2)">${w.phonetic || ''}</span>
              </div>
              <button class="btn btn-icon-sm" onclick="event.stopPropagation();window._speakWord('${w.word}')">🔊</button>
            </div>
            <div style="margin-top:var(--space-1);color:var(--text-secondary)">${w.ja}</div>
            <div style="margin-top:var(--space-2);font-size:var(--text-xs);color:var(--text-muted)">${w.pos || ''}</div>
          </div>
        `).join('');

    // Show load more button if results are full page
    const loadMoreBtn = document.getElementById('btn-load-more');
    if ((data.results || []).length === 50 && loadMoreBtn) {
      loadMoreBtn.style.display = 'inline-flex';
      loadMoreBtn.onclick = () => _loadLevelWords(container, level);
    } else if (loadMoreBtn) {
      loadMoreBtn.style.display = 'none';
    }

    window._vocabLookup = (word) => _handleSearch(container, word);
    window._speakWord = (word) => ttsService.speak(word);

  } catch (e) {
    const grid = document.getElementById('word-list');
    if (grid) grid.innerHTML = `<div style="text-align:center;grid-column:1/-1;color:var(--text-muted)">⚠️ 読み込みに失敗しました</div>`;
  } finally {
    isLoading = false;
  }
}
