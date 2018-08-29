declare module 'google-translate' {
    export interface GoogleTranslation {
        readonly originalText: string;
        readonly translatedText: string;
    }

    export interface GoogleDetect {
        readonly language: string;
        readonly confidence: number;
        readonly isReliable: boolean;
        readonly originalText: string;
    }

    type CallbackSupported = (err: Error, translated: string[]) => void;
    
    type CallbackDetect = (err: Error, translated: GoogleDetect[]) => void;
    
    type CallbackTranslate = (err: Error, translated: GoogleTranslation | GoogleTranslation[]) => void;

    interface Engine {
        detectLanguage: (value: string, done: CallbackDetect) => void;
        getSupportedLanguages: (value: string | undefined, done: CallbackSupported) => void;
        translate: (value: string | string[], sourceLang: string, targetLang: string, done: CallbackTranslate) => void;
    }

    function googleTranslate(apiKey: string, newConcurrentLimit?: number): Engine;

    export default googleTranslate;
}
