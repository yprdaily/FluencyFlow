/**
 * Profile Page - プロフィール・進捗画面（V2強化版）
 * ストリーク・発音回数・学習日数など詳細スタッツを表示
 */
import { storage } from '../services/storage.js';
import { stages } from '../data/lessons.js';
import { conversations } from '../data/conversations.js';

export function renderProfile(container) {
  const xp = storage.get('xp');
  const level = storage.get('level');
  const streak = storage.get('streak');
  const xpInfo = storage.getXPForNextLevel();
  const completedLessons = storage.getCompletedLessonCount();
  const totalLessons = stages.reduce((sum, s) => sum + s.lessons.length, 0);
  const completedConvs = Object.values(storage.get('conversationsCompleted') || {}).filter(c => c.completed).length;
  const pronunciationCount = storage.get('pronunciationCount') || 0;
  const wordsLearned = storage.get('wordsLearned') || 0;
  const studyDays = storage.getStudyDays();
  const settings = storage.getSettings();

  // レベルに応じたランク名
  const ranks = [
    { min: 1, name: 'Beginner', icon: '🌱', color: '#22c55e' },
    { min: 3, name: 'Elementary', icon: '📗', color: '#84cc16' },
    { min: 5, name: 'Pre-Intermediate', icon: '📘', color: '#eab308' },
    { min: 8, name: 'Intermediate', icon: '📙', color: '#f97316' },
    { min: 12, name: 'Upper-Intermediate', icon: '📕', color: '#ef4444' },
    { min: 18, name: 'Advanced', icon: '🏆', color: '#8b5cf6' },
    { min: 25, name: 'Master', icon: '👑', color: '#f59e0b' },
  ];
  const currentRank = [...ranks].reverse().find(r => level >= r.min) || ranks[0];

  container.innerHTML = `
    <div class="animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">👤 プロフィール</h1>
        <p class="page-subtitle">学習の進捗を確認しよう</p>
      </div>

      <!-- Level & XP -->
      <div class="card" style="text-align:center;margin-bottom:var(--space-6);background:linear-gradient(145deg, rgba(139,92,246,0.15), rgba(59,130,246,0.1));position:relative;overflow:hidden">
        <div style="font-size:4rem;margin-bottom:var(--space-2)">${currentRank.icon}</div>
        <div style="font-size:var(--text-3xl);font-weight:800;font-family:var(--font-display)">Level ${level}</div>
        <div style="font-size:var(--text-sm);color:${currentRank.color};font-weight:600;margin-bottom:var(--space-2)">${currentRank.name}</div>
        <div style="color:var(--color-xp);font-weight:600;margin-bottom:var(--space-4)">⭐ ${xp} XP</div>
        <div class="progress-label">
          <span>次のレベルまで</span>
          <span>${Math.round(xpInfo.current)} / ${xpInfo.needed} XP</span>
        </div>
        <div class="progress-bar progress-bar-lg">
          <div class="progress-bar-fill" style="width:${Math.min(xpInfo.progress, 100)}%"></div>
        </div>
      </div>

      <!-- Stats Grid -->
      <h3 style="margin-bottom:var(--space-4)">📊 学習統計</h3>
      <div class="stats-grid" style="margin-bottom:var(--space-6);grid-template-columns:repeat(auto-fit, minmax(140px, 1fr))">
        <div class="stat-card">
          <div class="stat-icon">🔥</div>
          <div class="stat-value">${streak}</div>
          <div class="stat-label">連続学習日数</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📅</div>
          <div class="stat-value">${studyDays}</div>
          <div class="stat-label">累計学習日数</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📖</div>
          <div class="stat-value">${completedLessons}</div>
          <div class="stat-label">完了レッスン</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">💬</div>
          <div class="stat-value">${completedConvs}</div>
          <div class="stat-label">会話クリア</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🔊</div>
          <div class="stat-value">${pronunciationCount}</div>
          <div class="stat-label">発音練習回数</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📝</div>
          <div class="stat-value">${wordsLearned}</div>
          <div class="stat-label">学習した単語数</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🎯</div>
          <div class="stat-value">${Math.round((completedLessons / totalLessons) * 100)}%</div>
          <div class="stat-label">全体進捗</div>
        </div>
      </div>

      <!-- Stage Progress -->
      <h3 style="margin-bottom:var(--space-4)">🗺️ ステージ別進捗</h3>
      ${stages.map(stage => {
    const completed = stage.lessons.filter(l => storage.isLessonCompleted(l.id)).length;
    const total = stage.lessons.length;
    const pct = Math.round((completed / total) * 100);
    return `
          <div class="card" style="margin-bottom:var(--space-3)">
            <div style="display:flex;align-items:center;gap:var(--space-3)">
              <span style="font-size:var(--text-xl)">${stage.icon}</span>
              <div style="flex:1">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-2)">
                  <span style="font-weight:600">${stage.title}</span>
                  <span style="font-size:var(--text-xs);color:${pct === 100 ? 'var(--color-success)' : 'var(--text-secondary)'};font-weight:600">
                    ${pct === 100 ? '✅ 完了' : `${completed}/${total}`}
                  </span>
                </div>
                <div class="progress-bar">
                  <div class="progress-bar-fill" style="width:${pct}%;${pct === 100 ? 'background:var(--color-success)' : ''}"></div>
                </div>
              </div>
            </div>
          </div>
        `;
  }).join('')}

      <!-- Settings -->
      <h3 style="margin-top:var(--space-8);margin-bottom:var(--space-4)">⚙️ 設定</h3>
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-4)">
          <div>
            <div style="font-weight:600">日本語訳を表示</div>
            <div style="font-size:var(--text-sm);color:var(--text-secondary)">レッスン中の日本語訳表示</div>
          </div>
          <label class="switch">
            <input type="checkbox" id="setting-ja" ${settings.showJapanese ? 'checked' : ''}>
            <span class="slider"></span>
          </label>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-4)">
          <div>
            <div style="font-weight:600">読み上げ速度</div>
            <div style="font-size:var(--text-sm);color:var(--text-secondary)">TTS の速度設定</div>
          </div>
          <select id="setting-rate" class="chat-input" style="width:auto;padding:var(--space-2) var(--space-3)">
            <option value="-30%" ${settings.ttsRate === '-30%' ? 'selected' : ''}>ゆっくり</option>
            <option value="+0%" ${settings.ttsRate === '+0%' ? 'selected' : ''}>普通</option>
            <option value="+20%" ${settings.ttsRate === '+20%' ? 'selected' : ''}>速い</option>
          </select>
        </div>
        <div style="border-top:1px solid var(--border-color);padding-top:var(--space-4)">
          <button class="btn btn-ghost" style="color:var(--color-error)" id="reset-btn">
            🗑️ 学習データをリセット
          </button>
        </div>
      </div>
    </div>
  `;

  // Setting events
  document.getElementById('setting-ja')?.addEventListener('change', (e) => {
    storage.updateSettings({ showJapanese: e.target.checked });
  });

  document.getElementById('setting-rate')?.addEventListener('change', (e) => {
    storage.updateSettings({ ttsRate: e.target.value });
  });

  document.getElementById('reset-btn')?.addEventListener('click', () => {
    if (confirm('本当に学習データをリセットしますか？この操作は元に戻せません。')) {
      storage.resetAll();
      location.reload();
    }
  });
}
