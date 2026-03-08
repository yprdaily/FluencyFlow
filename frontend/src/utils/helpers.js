/**
 * Utility helpers
 */

/** Shuffle array (Fisher-Yates) */
export function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/** Simple string normalization for comparison */
export function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s']/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

/** Calculate word-level similarity between two strings */
export function calculatePronunciationScore(expected, actual) {
    const expWords = normalizeText(expected).split(' ');
    const actWords = normalizeText(actual).split(' ');

    let matches = 0;
    const results = [];

    // Compare word by word
    const maxLen = Math.max(expWords.length, actWords.length);
    for (let i = 0; i < maxLen; i++) {
        const exp = expWords[i] || '';
        const act = actWords[i] || '';

        if (exp === act) {
            matches++;
            results.push({ word: exp, status: 'match' });
        } else if (exp && act) {
            // Check for close match (Levenshtein distance <= 2)
            if (levenshtein(exp, act) <= 2) {
                matches += 0.5;
                results.push({ word: exp, actual: act, status: 'close' });
            } else {
                results.push({ word: exp, actual: act, status: 'miss' });
            }
        } else if (exp) {
            results.push({ word: exp, status: 'missing' });
        } else {
            results.push({ word: act, status: 'extra' });
        }
    }

    const score = Math.round((matches / expWords.length) * 100);

    let grade, emoji, message;
    if (score >= 90) {
        grade = 'excellent';
        emoji = '🌟';
        message = '完璧な発音です！';
    } else if (score >= 70) {
        grade = 'good';
        emoji = '😊';
        message = 'とても良いです！少し改善点があります。';
    } else if (score >= 50) {
        grade = 'ok';
        emoji = '💪';
        message = 'もう一度お手本を聞いて練習しましょう！';
    } else {
        grade = 'retry';
        emoji = '🔄';
        message = 'お手本をよく聞いて、もう一度挑戦しましょう！';
    }

    return { score, grade, emoji, message, results };
}

/** Levenshtein distance */
function levenshtein(a, b) {
    const matrix = Array(b.length + 1).fill(null).map(() =>
        Array(a.length + 1).fill(null)
    );
    for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

    for (let j = 1; j <= b.length; j++) {
        for (let i = 1; i <= a.length; i++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[j][i] = Math.min(
                matrix[j][i - 1] + 1,
                matrix[j - 1][i] + 1,
                matrix[j - 1][i - 1] + cost
            );
        }
    }
    return matrix[b.length][a.length];
}

/** Format date as Japanese style */
export function formatDate(date) {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}`;
}

/** Get today string */
export function getToday() {
    return new Date().toISOString().split('T')[0];
}

/** Show toast notification */
export function showToast(message, type = 'success', duration = 3000) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = { success: '✅', error: '❌', xp: '⭐' };
    toast.innerHTML = `<span>${icons[type] || '💬'}</span><span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/** Show XP floating animation */
export function showXpFloat(amount, x, y) {
    const el = document.createElement('div');
    el.className = 'xp-float';
    el.textContent = `+${amount} XP`;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
}

/** Show confetti */
export function showConfetti() {
    const colors = ['#0891b2', '#f97316', '#10b981', '#eab308', '#ec4899', '#8b5cf6'];
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${window.innerHeight * 0.5 + Math.random() * 100}px`;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDelay = `${Math.random() * 0.5}s`;
        particle.style.animationDuration = `${1 + Math.random() * 1}s`;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 2500);
    }
}

/** Escape HTML */
export function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
