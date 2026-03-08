/**
 * Home Page - ホーム画面（レッスン一覧）
 */
import { stages } from '../data/lessons.js';
import { storage } from '../services/storage.js';

export function renderHome(container) {
    const streak = storage.get('streak');
    const level = storage.get('level');
    const xpInfo = storage.getXPForNextLevel();
    const completedCount = storage.getCompletedLessonCount();
    const totalLessons = stages.reduce((sum, s) => sum + s.lessons.length, 0);

    container.innerHTML = `
    <div class="animate-fade-in">
      <div class="page-header">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-4)">
          <div>
            <h1 class="page-title">🌺 Hawaii English</h1>
            <p class="page-subtitle">ハワイ旅行に向けて英語を学ぼう！</p>
          </div>
          <div style="display:flex;gap:var(--space-3)">
            ${streak > 0 ? `<div class="streak-display"><span class="streak-icon">🔥</span>${streak}日連続</div>` : ''}
            <div class="badge badge-primary">Lv.${level}</div>
          </div>
        </div>
      </div>

      <!-- 全体進捗 -->
      <div class="card" style="margin-bottom:var(--space-8)">
        <div class="progress-label">
          <span>全体進捗</span>
          <span>${completedCount} / ${totalLessons} レッスン完了</span>
        </div>
        <div class="progress-bar progress-bar-lg">
          <div class="progress-bar-fill" style="width:${(completedCount / totalLessons) * 100}%"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:var(--space-3)">
          <span style="font-size:var(--text-xs);color:var(--text-muted)">
            次のレベルまで: ${Math.round(xpInfo.needed - xpInfo.current)} XP
          </span>
          <span style="font-size:var(--text-xs);color:var(--color-xp)">
            ⭐ ${storage.get('xp')} XP
          </span>
        </div>
      </div>

      <!-- ステージ別レッスン一覧 -->
      ${stages.map((stage, stageIdx) => `
        <div class="animate-slide-up stagger-${stageIdx + 1}" style="margin-bottom:var(--space-8)">
          <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-4)">
            <span style="font-size:var(--text-2xl)">${stage.icon}</span>
            <div>
              <h2 style="font-size:var(--text-xl);font-weight:700">${stage.title}</h2>
              <p style="font-size:var(--text-sm);color:var(--text-secondary)">${stage.subtitle}</p>
            </div>
          </div>
          <div class="lesson-grid">
            ${stage.lessons.map((lesson, idx) => {
        const completed = storage.isLessonCompleted(lesson.id);
        const prevCompleted = idx === 0 || storage.isLessonCompleted(stage.lessons[idx - 1].id);
        const locked = stageIdx > 0 && idx === 0 && !isStageUnlocked(stageIdx);
        const isLocked = locked || (!prevCompleted && idx > 0);

        return `
                <div class="card card-clickable lesson-card ${completed ? 'completed' : ''} ${isLocked ? 'locked' : ''}"
                     data-lesson-id="${lesson.id}" ${!isLocked ? 'onclick="window.navigateTo(\'lesson\', \'' + lesson.id + '\')"' : ''}>
                  <div class="lesson-card-icon">${lesson.icon}</div>
                  <div class="card-title">${lesson.title}</div>
                  <div class="card-subtitle">${lesson.phrases?.length || 0} フレーズ</div>
                  ${completed ? '<div class="badge badge-success" style="margin-top:var(--space-3)">✅ 完了</div>' : ''}
                  ${!completed && !isLocked ? `
                    <div class="lesson-card-progress" style="margin-top:var(--space-3)">
                      <div class="badge badge-accent">+${lesson.xpReward} XP</div>
                    </div>
                  ` : ''}
                </div>
              `;
    }).join('')}
          </div>
        </div>
      `).join('')}

      <!-- 会話シミュレーションへのリンク -->
      <div class="card" style="margin-top:var(--space-6);text-align:center;cursor:pointer" onclick="window.navigateTo('conversations')">
        <div style="font-size:var(--text-4xl);margin-bottom:var(--space-3)">💬</div>
        <div class="card-title">会話シミュレーション</div>
        <div class="card-subtitle">シチュエーション別のロールプレイで実践練習</div>
        <button class="btn btn-primary" style="margin-top:var(--space-4)">練習を始める</button>
      </div>
    </div>
  `;
}

function isStageUnlocked(stageIdx) {
    if (stageIdx === 0) return true;
    const prevStage = stages[stageIdx - 1];
    const completedInPrev = prevStage.lessons.filter(l => storage.isLessonCompleted(l.id)).length;
    return completedInPrev >= Math.ceil(prevStage.lessons.length * 0.5);
}
