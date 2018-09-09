import { LanguageRequest } from 'telegraf-bot-typings';

export const getLanguageCode = (request: LanguageRequest): string => {
    if ('ARABIC' === request) {
        return 'ar';
    } if ('PORTUGUESE' === request) {
        return 'pt';
    } if ('INDONESIAN' === request) {
        return 'id';
    } if ('DUTCH' === request) {
        return 'nl';
    } if ('SPANISH' === request) {
        return 'es';
    } if ('ITALIAN' === request) {
        return 'it';
    } if ('DEUTSCH' === request) {
        return 'de';
    } if ('FRENCH' === request) {
        return 'fr';
    } if ('RUSSIAN' === request) {
        return 'ru';
    } if ('CHINESE' === request) {
        return 'zh';
    } if ('JAPANESE' === request) {
        return 'jp';
    } if ('FARSI' === request) {
        return 'fa';
    }

    return 'en';
};
