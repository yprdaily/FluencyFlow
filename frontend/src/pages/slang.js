/**
 * Slang Dictionary Page - スラング・口語表現辞典
 */
import { slangCategories } from '../data/slang.js';
import { ttsService } from '../services/tts.js';

export function renderSlangDictionary(container) {
    let activeTab = slangCategories[0].id;

    const renderContent = () => {
        const activeCategory = slangCategories.find(c => c.id === activeTab);

        container.innerHTML = `
      <div class="animate-fade-in">
        <div class="page-header">
          <div style="display:flex;align-items:center;gap:var(--space-4)">
            <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('home')">←</button>
            <div>
              <h1 class="page-title">🤙 スラング辞典</h1>
              <p class="page-subtitle">教科書には載らないリアルな生きた英語</p>
            </div>
          </div>
        </div>

        <!-- Category Tabs -->
        <div style="display:flex;gap:var(--space-2);overflow-x:auto;padding-bottom:var(--space-4);margin-bottom:var(--space-6);scrollbar-width:none">
          ${slangCategories.map(cat => `
            <button class="btn ${cat.id === activeTab ? 'btn-primary' : 'btn-ghost'} tab-btn" data-id="${cat.id}" style="white-space:nowrap;border-radius:var(--radius-full)">
              ${cat.icon} ${cat.title}
            </button>
          `).join('')}
        </div>

        <!-- Category Description -->
        <div class="card" style="margin-bottom:var(--space-6);background:linear-gradient(145deg, rgba(236,72,153,0.1), rgba(139,92,246,0.1))">
          <h2 style="font-size:var(--text-lg);font-weight:600;margin-bottom:var(--space-2)">
            ${activeCategory.icon} ${activeCategory.title}
          </h2>
          <p style="color:var(--text-secondary)">${activeCategory.description}</p>
        </div>

        <!-- Expressions List -->
        <div style="display:flex;flex-direction:column;gap:var(--space-4)">
          ${activeCategory.expressions.map((exp, i) => `
            <div class="card animate-slide-up stagger-${(i % 5) + 1}" style="padding:0;overflow:hidden">
              <!-- Header -->
              <div style="padding:var(--space-4) var(--space-5);border-bottom:1px solid var(--border-color);display:flex;justify-content:space-between;align-items:flex-start">
                <div>
                  <h3 style="font-size:var(--text-xl);font-family:var(--font-display);font-weight:800;color:var(--color-primary);margin-bottom:var(--space-1)">
                    "${exp.en}"
                  </h3>
                  <div style="font-size:var(--text-lg);font-weight:600">${exp.ja}</div>
                </div>
                <button class="btn btn-ghost btn-icon-sm btn-speak" data-text="${exp.en.replace(/"/g, '&quot;')}">🔊</button>
              </div>
              
              <!-- Content -->
              <div style="padding:var(--space-4) var(--space-5);background:rgba(0,0,0,0.1)">
                <!-- Context / Explanation -->
                <div style="margin-bottom:var(--space-4);font-size:var(--text-sm);color:var(--text-secondary);display:flex;gap:var(--space-2);align-items:flex-start">
                  <span>💡</span>
                  <span style="line-height:1.5">${exp.context}</span>
                </div>
                
                <!-- Example -->
                <div style="border-left:3px solid var(--color-accent);padding-left:var(--space-3)">
                  <div style="display:flex;align-items:center;gap:var(--space-2);margin-bottom:var(--space-1)">
                    <span style="font-weight:600;font-size:var(--text-sm)">Example</span>
                    <button class="btn btn-icon-sm btn-speak" data-text="${exp.example.replace(/"/g, '&quot;')}" style="width:20px;height:20px;min-width:0;font-size:10px;padding:0">🔊</button>
                  </div>
                  <div style="font-style:italic;margin-bottom:var(--space-1)">"${exp.example}"</div>
                  <div style="font-size:var(--text-sm);color:var(--text-muted)">「${exp.exampleJa}」</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

        // Attach Tab Events
        container.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                activeTab = e.currentTarget.dataset.id;
                renderContent();
            });
        });

        // Attach TTS Events
        container.querySelectorAll('.btn-speak').forEach(btn => {
            btn.addEventListener('click', (e) => {
                ttsService.speak(e.currentTarget.dataset.text);
            });
        });
    };

    renderContent();
}
