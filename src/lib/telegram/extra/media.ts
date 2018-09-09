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

export const animeExtra = ({ filter, translation }: IMediaExtraContext) => {
    if ('NOT_YET_RELEASED' === filter) {
        return soonAnimeExtra(translation);
    } if ('RELEASING' === filter) {
        return airingAnimeExtra(translation);
    } if ('FINISHED' === filter) {
        return completedAnimeExtra(translation);
    } if ('CANCELLED' === filter) {
        return cancelledAnimeExtra(translation);
    }

    return watchlistExtra(translation);
};

export const mangaExtra = ({ filter, translation }: IMediaExtraContext) => {
    if ('NOT_YET_RELEASED' === filter) {
        return soonMangaExtra(translation);
    } if ('FINISHED' === filter) {
        return completedMangaExtra(translation);
    } if ('CANCELLED' === filter) {
        return cancelledMangaExtra(translation);
    } if ('RELEASING' === filter) {
        return publishingMangaExtra(translation);
    }

    return readlistExtra(translation);
};
