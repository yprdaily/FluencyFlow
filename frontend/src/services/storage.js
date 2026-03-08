/**
 * Storage Service - LocalStorage管理
 */

const STORAGE_KEY = 'hawaii_english_data';

const defaultData = {
    xp: 0,
    level: 1,
    streak: 0,
    lastStudyDate: null,
    lessonsCompleted: {},
    quizScores: {},
    conversationsCompleted: {},
    totalStudyMinutes: 0,
    achievements: [],
    settings: {
        ttsVoice: 'en-US-JennyNeural',
        ttsRate: '+0%',
        showJapanese: true
    }
};

class StorageServiceClass {
    constructor() {
        this.data = this._load();
    }

    _load() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                return { ...defaultData, ...JSON.parse(raw) };
            }
        } catch (e) {
            console.error('Failed to load data:', e);
        }
        return { ...defaultData };
    }

    _save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
        } catch (e) {
            console.error('Failed to save data:', e);
        }
    }

    get(key) {
        return this.data[key];
    }

    set(key, value) {
        this.data[key] = value;
        this._save();
    }

    // --- XP & Level ---
    addXP(amount) {
        this.data.xp += amount;

        // レベルアップチェック
        const newLevel = this._calculateLevel(this.data.xp);
        const leveledUp = newLevel > this.data.level;
        this.data.level = newLevel;

        this._save();
        return { xp: this.data.xp, level: this.data.level, leveledUp };
    }

    _calculateLevel(xp) {
        // Each level requires progressively more XP
        // Level 1: 0, Level 2: 100, Level 3: 250, Level 4: 450, ...
        let level = 1;
        let required = 100;
        let totalRequired = 0;
        while (totalRequired + required <= xp) {
            totalRequired += required;
            level++;
            required = Math.floor(required * 1.5);
        }
        return level;
    }

    getXPForNextLevel() {
        let required = 100;
        let totalRequired = 0;
        for (let i = 1; i < this.data.level; i++) {
            totalRequired += required;
            required = Math.floor(required * 1.5);
        }
        return {
            current: this.data.xp - totalRequired,
            needed: required,
            progress: ((this.data.xp - totalRequired) / required) * 100
        };
    }

    // --- Streak ---
    updateStreak() {
        const today = new Date().toISOString().split('T')[0];
        const last = this.data.lastStudyDate;

        if (last === today) return this.data.streak;

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (last === yesterdayStr) {
            this.data.streak++;
        } else {
            this.data.streak = 1;
        }

        this.data.lastStudyDate = today;
        this._save();
        return this.data.streak;
    }

    // --- Lesson Progress ---
    completeLesson(lessonId, score) {
        this.data.lessonsCompleted[lessonId] = {
            completed: true,
            score,
            date: new Date().toISOString()
        };
        this._save();
    }

    isLessonCompleted(lessonId) {
        return this.data.lessonsCompleted[lessonId]?.completed || false;
    }

    getLessonScore(lessonId) {
        return this.data.lessonsCompleted[lessonId]?.score || 0;
    }

    getCompletedLessonCount() {
        return Object.values(this.data.lessonsCompleted).filter(l => l.completed).length;
    }

    // --- Quiz Scores ---
    saveQuizScore(quizId, score) {
        const prev = this.data.quizScores[quizId] || 0;
        if (score > prev) {
            this.data.quizScores[quizId] = score;
            this._save();
        }
    }

    // --- Conversation ---
    completeConversation(convId) {
        this.data.conversationsCompleted[convId] = {
            completed: true,
            date: new Date().toISOString()
        };
        this._save();
    }

    // --- Settings ---
    getSettings() {
        return this.data.settings;
    }

    updateSettings(settings) {
        this.data.settings = { ...this.data.settings, ...settings };
        this._save();
    }
}

export const storage = new StorageServiceClass();
