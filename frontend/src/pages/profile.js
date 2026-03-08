/**
 * Profile Page - プロフィール・進捗画面
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
    const settings = storage.getSettings();

    container.innerHTML = `
    <div class="animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">👤 プロフィール</h1>
        <p class="page-subtitle">学習の進捗を確認しよう</p>
      </div>

      <!-- Level & XP -->
      <div class="card" style="text-align:center;margin-bottom:var(--space-6);background:linear-gradient(145deg, rgba(8,145,178,0.1), rgba(249,115,22,0.05))">
        <div style="font-size:4rem;margin-bottom:var(--space-2)">🌺</div>
        <div style="font-size:var(--text-3xl);font-weight:800;font-family:var(--font-display)">Level ${level}</div>
        <div style="color:var(--color-xp);font-weight:600;margin-bottom:var(--space-4)">⭐ ${xp} XP</div>
        <div class="progress-label">
          <span>次のレベルまで</span>
          <span>${Math.round(xpInfo.current)} / ${xpInfo.needed} XP</span>
        </div>
        <div class="progress-bar progress-bar-lg">
          <div class="progress-bar-fill" style="width:${Math.min(xpInfo.progress, 100)}%"></div>
        </div>
      </div>

      <!-- Stats -->
      <div class="stats-grid" style="margin-bottom:var(--space-6)">
        <div class="stat-card">
          <div class="stat-icon">🔥</div>
          <div class="stat-value">${streak}</div>
          <div class="stat-label">連続学習日数</div>
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
          <div class="stat-icon">🎯</div>
          <div class="stat-value">${Math.round((completedLessons / totalLessons) * 100)}%</div>
          <div class="stat-label">全体進捗</div>
        </div>
      </div>

      <!-- Stage Progress -->
      <h3 style="margin-bottom:var(--space-4)">📊 ステージ別進捗</h3>
      ${stages.map(stage => {
        const completed = stage.lessons.filter(l => storage.isLessonCompleted(l.id)).length;
        const total = stage.lessons.length;
        const pct = Math.round((completed / total) * 100);
        return `
          <div class="card" style="margin-bottom:var(--space-3)">
            <div style="display:flex;align-items:center;gap:var(--space-3)">
              <span style="font-size:var(--text-xl)">${stage.icon}</span>
              <div style="flex:1">
                <div style="font-weight:600">${stage.title}</div>
                <div class="progress-bar" style="margin-top:var(--space-2)">
                  <div class="progress-bar-fill" style="width:${pct}%"></div>
                </div>
              </div>
              <span style="font-size:var(--text-sm);color:var(--text-secondary)">${completed}/${total}</span>
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
            localStorage.removeItem('hawaii_english_data');
            location.reload();
        }
    });
}
