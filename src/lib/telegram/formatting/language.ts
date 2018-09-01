import { AllRequests } from 'telegraf-bot-typings';

export const getLanguageCode = (request: AllRequests): string => {
    if ('LANGUAGE-PORTUGUESE' === request) {
        return 'pt';
    } if ('LANGUAGE-INDONESIAN' === request) {
        return 'id';
    } if ('LANGUAGE-DUTCH' === request) {
        return 'nl';
    } if ('LANGUAGE-SPANISH' === request) {
        return 'es';
    } if ('LANGUAGE-ITALIAN' === request) {
        return 'it';
    } if ('LANGUAGE-DEUTSCH' === request) {
        return 'de';
    } if ('LANGUAGE-FRENCH' === request) {
        return 'fr';
    } if ('LANGUAGE-RUSSIAN' === request) {
        return 'ru';
    } if ('LANGUAGE-CHINESE' === request) {
        return 'zh';
    } if ('LANGUAGE-JAPANESE' === request) {
        return 'jp';
    }

    return 'en';
};
