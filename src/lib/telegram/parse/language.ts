import { LanguageRequest, LanguageCode } from 'telegraf-bot-typings';

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

export const supportedLanguage = (request: LanguageCode): boolean => {
    if ('ar' === request) {
        return true;
    } if ('pt' === request) {
        return true;
    } if ('id' === request) {
        return true;
    } if ('nl' === request) {
        return true;
    } if ('es' === request) {
        return true;
    } if ('it' === request) {
        return true;
    } if ('de' === request) {
        return true;
    } if ('fr' === request) {
        return true;
    } if ('ru' === request) {
        return true;
    } if ('zh' === request) {
        return true;
    } if ('jp' === request) {
        return true;
    } if ('en' === request) {
        return true;
    }

    return false;
};
