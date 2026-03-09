/**
 * Ollama Service - AI会話機能
 */

const API_BASE = 'http://localhost:8080';

class OllamaServiceClass {
    constructor() {
        this.available = false;
        this.history = [];
    }

    async checkAvailability() {
        try {
            const res = await fetch(`${API_BASE}/api/health`);
            const data = await res.json();
            this.available = data.ollama;
            return this.available;
        } catch {
            this.available = false;
            return false;
        }
    }

    async chat(message, context = '') {
        if (!this.available) {
            throw new Error('Ollama is not available');
        }

        this.history.push({ role: 'user', content: message });

        const res = await fetch(`${API_BASE}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message,
                context,
                history: this.history.slice(-10)
            })
        });

        if (!res.ok) {
            throw new Error('Chat request failed');
        }

        const data = await res.json();
        this.history.push({ role: 'assistant', content: data.reply });

        return data.reply;
    }

    clearHistory() {
        this.history = [];
    }
}

export const ollamaService = new OllamaServiceClass();
