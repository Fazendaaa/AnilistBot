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
    }

    return 'en';
};

export const supportedLanguage = (request: LanguageRequest): boolean => {
    if ('ARABIC' === request) {
        return true;
    } if ('PORTUGUESE' === request) {
        return true;
    } if ('INDONESIAN' === request) {
        return true;
    } if ('DUTCH' === request) {
        return true;
    } if ('SPANISH' === request) {
        return true;
    } if ('ITALIAN' === request) {
        return true;
    } if ('DEUTSCH' === request) {
        return true;
    } if ('FRENCH' === request) {
        return true;
    } if ('RUSSIAN' === request) {
        return true;
    } if ('CHINESE' === request) {
        return true;
    } if ('JAPANESE' === request) {
        return true;
    } if ('ENGLISH' === request) {
        return true;
    }

    return false;
};
