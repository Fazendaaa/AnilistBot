import { Extra } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { IMediaExtraContext } from '.';
import { airingAnimeKeyboard, cancelledAnimeKeyboard, cancelledMangaKeyboard, completedAnimeKeyboard, completedMangaKeyboard,
publishingMangaKeyboard, readlistKeyboard, soonAnimeKeyboard, soonMangaKeyboard, watchlistKeyboard } from '../keyboard/list';

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

export const animeExtra = ({ request, translation }: IMediaExtraContext) => {
    if ('NOT_YET_RELEASED' === request) {
        return soonAnimeExtra(translation);
    } if ('RELEASING' === request) {
        return airingAnimeExtra(translation);
    } if ('FINISHED' === request) {
        return completedAnimeExtra(translation);
    } if ('CANCELLED' === request) {
        return cancelledAnimeExtra(translation);
    }

    return watchlistExtra(translation);
};

export const mangaExtra = ({ request, translation }: IMediaExtraContext) => {
    if ('NOT_YET_RELEASED' === request) {
        return soonMangaExtra(translation);
    } if ('FINISHED' === request) {
        return completedMangaExtra(translation);
    } if ('CANCELLED' === request) {
        return cancelledMangaExtra(translation);
    } if ('RELEASING' === request) {
        return publishingMangaExtra(translation);
    }

    return readlistExtra(translation);
};
