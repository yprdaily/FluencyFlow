/**
 * Idioms Dictionary Page - イディオム（慣用句）辞典
 * 直訳では意味がわからない英語表現を、カテゴリ別に検索・閲覧できるページ。
 */
import { idiomCategories, searchIdioms } from '../data/idioms.js';
import { ttsService } from '../services/tts.js';

export function renderIdiomsDictionary(container) {
  let activeTab = idiomCategories[0].id;
  let searchQuery = '';

  const renderContent = () => {
    const activeCategory = idiomCategories.find(c => c.id === activeTab);
    const isSearching = searchQuery.length > 0;
    const displayIdioms = isSearching ? searchIdioms(searchQuery) : activeCategory.idioms;

    container.innerHTML = `
      <div class="animate-fade-in">
        <div class="page-header">
          <div style="display:flex;align-items:center;gap:var(--space-4)">
            <button class="btn btn-ghost btn-icon-sm" onclick="window.navigateTo('home')">←</button>
            <div>
              <h1 class="page-title">📚 イディオム辞典</h1>
              <p class="page-subtitle">直訳では通じない！ネイティブの慣用句${idiomCategories.reduce((sum, c) => sum + c.idioms.length, 0)}選</p>
            </div>
          </div>
        </div>

        <!-- Search Box -->
        <div style="margin-bottom:var(--space-5)">
          <input type="text" class="chat-input" id="idiom-search"
            placeholder="🔍 イディオムを検索（英語 or 日本語）..."
            value="${searchQuery}"
            style="width:100%;border-radius:var(--radius-full);padding-left:var(--space-5)" />
        </div>

        ${isSearching ? `
          <div style="margin-bottom:var(--space-4);color:var(--text-secondary);font-size:var(--text-sm)">
            「${searchQuery}」の検索結果: <strong>${displayIdioms.length}</strong> 件
          </div>
        ` : `
          <!-- Category Tabs -->
          <div style="display:flex;flex-wrap:wrap;gap:var(--space-2);padding-bottom:var(--space-4);margin-bottom:var(--space-4)">
            ${idiomCategories.map(cat => `
              <button class="btn ${cat.id === activeTab ? 'btn-primary' : 'btn-ghost'} tab-btn" data-id="${cat.id}" style="border-radius:var(--radius-full)">
                ${cat.icon} ${cat.title}
              </button>
            `).join('')}
          </div>

          <!-- Category Description -->
          <div class="card" style="margin-bottom:var(--space-6);background:linear-gradient(145deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))">
            <h2 style="font-size:var(--text-lg);font-weight:600;margin-bottom:var(--space-2)">
              ${activeCategory.icon} ${activeCategory.title}
            </h2>
            <p style="color:var(--text-secondary)">${activeCategory.description}</p>
          </div>
        `}

        <!-- Idioms List -->
        <div style="display:flex;flex-direction:column;gap:var(--space-4)">
          ${displayIdioms.length === 0 ? `
            <div class="card" style="text-align:center;padding:var(--space-8);color:var(--text-secondary)">
              😅 該当するイディオムが見つかりません
            </div>
          ` : displayIdioms.map((idiom, i) => `
            <div class="card animate-slide-up stagger-${(i % 5) + 1}" style="padding:0;overflow:hidden">
              <!-- Header -->
              <div style="padding:var(--space-4) var(--space-5);border-bottom:1px solid var(--border-color);display:flex;justify-content:space-between;align-items:flex-start">
                <div style="flex:1">
                  <h3 style="font-size:var(--text-xl);font-family:var(--font-display);font-weight:800;color:var(--color-primary);margin-bottom:var(--space-1)">
                    "${idiom.en}"
                  </h3>
                  <div style="font-size:var(--text-lg);font-weight:600">${idiom.ja}</div>
                  <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--space-1)">
                    📝 直訳: 「${idiom.literal}」
                  </div>
                </div>
                <div style="display:flex;flex-direction:column;align-items:flex-end;gap:var(--space-2)">
                  <button class="btn btn-ghost btn-icon-sm btn-speak" data-text="${idiom.en.replace(/"/g, '&quot;')}">🔊</button>
                  <span style="font-size:var(--text-xs);padding:2px 8px;border-radius:var(--radius-full);background:rgba(139,92,246,0.15);color:var(--color-primary)">${idiom.usage}</span>
                </div>
              </div>
              
              <!-- Content -->
              <div style="padding:var(--space-4) var(--space-5);background:rgba(0,0,0,0.1)">
                <!-- Context / Explanation -->
                <div style="margin-bottom:var(--space-4);font-size:var(--text-sm);color:var(--text-secondary);display:flex;gap:var(--space-2);align-items:flex-start">
                  <span>💡</span>
                  <span style="line-height:1.5">${idiom.context}</span>
                </div>
                
                <!-- Example -->
                <div style="border-left:3px solid var(--color-accent);padding-left:var(--space-3)">
                  <div style="display:flex;align-items:center;gap:var(--space-2);margin-bottom:var(--space-1)">
                    <span style="font-weight:600;font-size:var(--text-sm)">Example</span>
                    <button class="btn btn-icon-sm btn-speak" data-text="${idiom.example.replace(/"/g, '&quot;')}" style="width:20px;height:20px;min-width:0;font-size:10px;padding:0">🔊</button>
                  </div>
                  <div style="font-style:italic;margin-bottom:var(--space-1)">"${idiom.example}"</div>
                  <div style="font-size:var(--text-sm);color:var(--text-muted)">「${idiom.exampleJa}」</div>
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
        searchQuery = '';
        renderContent();
      });
    });

    // Attach TTS Events
    container.querySelectorAll('.btn-speak').forEach(btn => {
      btn.addEventListener('click', (e) => {
        ttsService.speak(e.currentTarget.dataset.text);
      });
    });

    // Attach Search Events
    const searchInput = document.getElementById('idiom-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderContent();
        // Restore focus and cursor position
        const newInput = document.getElementById('idiom-search');
        if (newInput) {
          newInput.focus();
          newInput.setSelectionRange(newInput.value.length, newInput.value.length);
        }
      });
    }
  };

  renderContent();
}
