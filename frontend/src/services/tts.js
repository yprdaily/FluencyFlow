/**
 * TTS Service - edge-tts backend proxy
 */

const API_BASE = 'http://localhost:8765';

class TTSServiceClass {
    constructor() {
        this.audioCache = new Map();
        this.currentAudio = null;
        this.available = false;
    }

    async checkAvailability() {
        try {
            const res = await fetch(`${API_BASE}/api/health`);
            const data = await res.json();
            this.available = data.tts;
            return this.available;
        } catch {
            this.available = false;
            return false;
        }
    }

    async speak(text, options = {}) {
        const { voice = 'en-US-JennyNeural', rate = '+0%' } = options;

        // Stop current audio if playing
        this.stop();

        if (!this.available) {
            console.error('TTS service is not available. Fallback is strictly disabled.');
            return Promise.reject(new Error('TTS Service is unavailable.'));
        }

        try {
            return await this._speakEdgeTTS(text, voice, rate);
        } catch (e) {
            console.error('edge-tts failed. Fallback is strictly disabled.', e);
            return Promise.reject(e);
        }
    }

    async _speakEdgeTTS(text, voice, rate) {
        const cacheKey = `${text}_${voice}_${rate}`;

        let audioUrl = this.audioCache.get(cacheKey);
        if (!audioUrl) {
            const res = await fetch(`${API_BASE}/api/tts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text, voice, rate })
            });

            if (!res.ok) throw new Error('TTS request failed');

            const blob = await res.blob();
            audioUrl = URL.createObjectURL(blob);
            this.audioCache.set(cacheKey, audioUrl);
        }

        return new Promise((resolve, reject) => {
            this.currentAudio = new Audio(audioUrl);
            this.currentAudio.onended = () => resolve();
            this.currentAudio.onerror = (e) => reject(e);
            this.currentAudio.play();
        });
    }

    _parseRate(rate) {
        // Not needed for edge-tts as it handles rate parsing internally, but keeping for compatibility if logic expands
        return rate;
    }

    stop() {
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            this.currentAudio = null;
        }
        if (window.speechSynthesis) {
            speechSynthesis.cancel();
        }
    }
}

export const ttsService = new TTSServiceClass();
