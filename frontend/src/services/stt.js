/**
 * STT Service - Web Speech APIを使用した音声認識
 */

class STTServiceClass {
    constructor() {
        this.recognition = null;
        this.isListening = false;
        this.available = false;
        this._init();
    }

    _init() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn('Web Speech API is not supported');
            return;
        }
        this.recognition = new SpeechRecognition();
        this.recognition.lang = 'en-US';
        this.recognition.interimResults = true;
        this.recognition.continuous = false;
        this.recognition.maxAlternatives = 3;
        this.available = true;
    }

    /**
     * Start listening and return recognized text
     * @param {Object} callbacks - { onInterim, onResult, onError, onEnd }
     */
    startListening(callbacks = {}) {
        if (!this.available || this.isListening) return;

        const { onInterim, onResult, onError, onEnd } = callbacks;

        this.isListening = true;

        this.recognition.onresult = (event) => {
            let interimTranscript = '';
            let finalTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                const confidence = event.results[i][0].confidence;

                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                    if (onResult) onResult(transcript.trim(), confidence);
                } else {
                    interimTranscript += transcript;
                    if (onInterim) onInterim(interimTranscript);
                }
            }
        };

        this.recognition.onerror = (event) => {
            this.isListening = false;
            if (event.error !== 'no-speech' && onError) {
                onError(event.error);
            }
        };

        this.recognition.onend = () => {
            this.isListening = false;
            if (onEnd) onEnd();
        };

        this.recognition.start();
    }

    stopListening() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
            this.isListening = false;
        }
    }
}

export const sttService = new STTServiceClass();
