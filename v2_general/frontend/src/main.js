/**
 * FluencyFlow - Main Entry Point
 */
import { Router } from './utils/router.js';
import { ttsService } from './services/tts.js';
import { ollamaService } from './services/ollama.js';
import { storage } from './services/storage.js';
import { renderHome } from './pages/home.js';
import { renderLesson } from './pages/lesson.js';
import { renderQuiz } from './pages/quiz.js';
import { renderConversations, renderConversation } from './pages/conversation.js';
import { renderFreeTalk } from './pages/free-talk.js';
import { renderProfile } from './pages/profile.js';
import { renderVocabularyLevels, renderVocabularyFlashcards } from './pages/vocabulary.js';
import { renderSlangDictionary } from './pages/slang.js';
import { renderIdiomsDictionary } from './pages/idioms.js';
import { renderMinimalPairs } from './pages/minimal-pairs.js';

// --- Navigation ---
const NAV_ITEMS = [
    { id: 'home', label: 'ホーム', icon: '🏠', route: '/' },
    { section: '学習' },
    { id: 'vocabulary', label: '英単語帳', icon: '📚', route: '/vocabulary' },
    { id: 'idioms', label: 'イディオム辞典', icon: '📖', route: '/idioms' },
    { id: 'slang', label: 'スラング辞典', icon: '🤙', route: '/slang' },
    { id: 'minimal-pairs', label: '発音・アクセント', icon: '🗣️', route: '/minimal-pairs' },
    { id: 'conversations', label: '会話練習', icon: '💬', route: '/conversations' },
    { id: 'free-talk', label: 'AIフリートーク', icon: '🤖', route: '/free-talk' },
    { section: 'その他' },
    { id: 'profile', label: 'プロフィール', icon: '👤', route: '/profile' },
];

// --- Initialize ---
async function init() {
    // Check backend services
    ttsService.checkAvailability();
    ollamaService.checkAvailability();

    // Update streak
    storage.updateStreak();

    // Setup navigation
    renderSidebar();
    updateXPDisplay();

    // Setup router
    const router = new Router();
    const container = document.getElementById('page-container');

    router
        .add('/', () => {
            setActiveNav('home');
            renderHome(container);
        })
        .add('/lesson', (params) => {
            setActiveNav('home');
            renderLesson(container, params);
        })
        .add('/quiz', (params) => {
            setActiveNav('home');
            renderQuiz(container, params);
        })
        .add('/conversations', () => {
            setActiveNav('conversations');
            renderConversations(container);
        })
        .add('/conversation', (params) => {
            setActiveNav('conversations');
            renderConversation(container, params);
        })
        .add('/free-talk', () => {
            setActiveNav('free-talk');
            renderFreeTalk(container);
        })
        .add('/vocabulary', (params) => {
            setActiveNav('vocabulary');
            if (params && params.length > 0) {
                renderVocabularyFlashcards(container, params);
            } else {
                renderVocabularyLevels(container);
            }
        })
        .add('/slang', () => {
            setActiveNav('slang');
            renderSlangDictionary(container);
        })
        .add('/idioms', () => {
            setActiveNav('idioms');
            renderIdiomsDictionary(container);
        })
        .add('/minimal-pairs', () => {
            setActiveNav('minimal-pairs');
            renderMinimalPairs(container);
        })
        .add('/profile', () => {
            setActiveNav('profile');
            renderProfile(container);
        });

    // Global navigation helper
    window.navigateTo = (page, ...args) => {
        const path = args.length ? `${page}/${args.join('/')}` : page;
        router.navigate(path);
    };

    router.start();
}

function renderSidebar() {
    const nav = document.getElementById('sidebar-nav');
    nav.innerHTML = NAV_ITEMS.map(item => {
        if (item.section) {
            return `<div class="nav-section-title">${item.section}</div>`;
        }
        return `
      <div class="nav-item" data-nav="${item.id}" onclick="window.navigateTo('${item.route.slice(1) || 'home'}')">
        <span class="nav-item-icon">${item.icon}</span>
        <span class="nav-item-label">${item.label}</span>
      </div>
    `;
    }).join('');
}

function setActiveNav(id) {
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('active', el.dataset.nav === id);
    });
    updateXPDisplay();
}

function updateXPDisplay() {
    const xpDisplay = document.getElementById('xp-display');
    const xpInfo = storage.getXPForNextLevel();
    xpDisplay.innerHTML = `
    <span class="xp-icon">⭐</span>
    <div class="xp-info">
      <div class="xp-level">Level ${storage.get('level')}</div>
      <div class="xp-amount">${storage.get('xp')} XP</div>
    </div>
  `;
}

// Start the app
init();
