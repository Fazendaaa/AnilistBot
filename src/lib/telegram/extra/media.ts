import { Extra } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { IExtraContext } from '.';
import { airingAnimeKeyboard, cancelledAnimeKeyboard, cancelledMangaKeyboard, completedAnimeKeyboard, completedMangaKeyboard,
publishingMangaKeyboard, readlistKeyboard, soonAnimeKeyboard, soonMangaKeyboard, watchlistKeyboard } from '../keyboard/media';

const readlistExtra = (translation: I18n) => Extra.markdown().markup(readlistKeyboard(translation));

const soonMangaExtra = (translation: I18n) => Extra.markdown().markup(soonMangaKeyboard(translation));

const watchlistExtra = (translation: I18n) => Extra.markdown().markup(watchlistKeyboard(translation));

const soonAnimeExtra = (translation: I18n) => Extra.markdown().markup(soonAnimeKeyboard(translation));

const airingAnimeExtra = (translation: I18n) => Extra.markdown().markup(airingAnimeKeyboard(translation));

const completedMangaExtra = (translation: I18n) => Extra.markdown().markup(completedMangaKeyboard(translation));

const cancelledMangaExtra = (translation: I18n) => Extra.markdown().markup(cancelledMangaKeyboard(translation));

const completedAnimeExtra = (translation: I18n) => Extra.markdown().markup(completedAnimeKeyboard(translation));

const cancelledAnimeExtra = (translation: I18n) => Extra.markdown().markup(cancelledAnimeKeyboard(translation));

const publishingMangaExtra = (translation: I18n) => Extra.markdown().markup(publishingMangaKeyboard(translation));

export const animeExtra = ({ request, translation }: IExtraContext) => {
    if ('ANIME-SOON' === request) {
        return soonAnimeExtra(translation);
    } if ('ANIME-RELEASING' === request) {
        return airingAnimeExtra(translation);
    } if ('ANIME-COMPLETED' === request) {
        return completedAnimeExtra(translation);
    } if ('ANIME-CANCELLED' === request) {
        return cancelledAnimeExtra(translation);
    }

    return watchlistExtra(translation);
};

export const mangaExtra = ({ request, translation }: IExtraContext) => {
    if ('MANGA-SOON' === request) {
        return soonMangaExtra(translation);
    } if ('MANGA-COMPLETED' === request) {
        return completedMangaExtra(translation);
    } if ('MANGA-CANCELLED' === request) {
        return cancelledMangaExtra(translation);
    } if ('MANGA-RELEASING' === request) {
        return publishingMangaExtra(translation);
    }

    return readlistExtra(translation);
};
