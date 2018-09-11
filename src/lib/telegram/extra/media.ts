// tslint:disable: no-submodule-imports
import { Extra } from 'telegraf';
import { I18n } from 'telegraf-i18n';
import { ExtraEditMessage } from 'telegraf/typings/telegram-types';
import { IHandleMediaMoreExtra, IMediaExtraContext, IMediaMore } from '.';
import { animeSearchTitle, mangaSearchTitle } from '../../anilist/requests/title';
import { IAllSubscriptionResponse } from '../../database/subscriptions';
import { airingAnimeKeyboard, animeMoreKeyboard, cancelledAnimeKeyboard, cancelledMangaKeyboard, completedAnimeKeyboard,
completedMangaKeyboard, mangaMoreKeyboard, publishingMangaKeyboard, readlistKeyboard, readlistMoreInfoKeyboard, soonAnimeKeyboard,
soonMangaKeyboard, watchlistKeyboard, watchlistMoreInfoKeyboard } from '../keyboard/list';

const readlistExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(readlistKeyboard(translation));

const soonMangaExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(soonMangaKeyboard(translation));

const watchlistExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(watchlistKeyboard(translation));

const soonAnimeExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(soonAnimeKeyboard(translation));

const airingAnimeExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(airingAnimeKeyboard(translation));

const completedMangaExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(completedMangaKeyboard(translation));

const cancelledMangaExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(cancelledMangaKeyboard(translation));

const completedAnimeExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(completedAnimeKeyboard(translation));

const cancelledAnimeExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(cancelledAnimeKeyboard(translation));

const publishingMangaExtra = (translation: I18n): ExtraEditMessage => Extra.markdown().markup(publishingMangaKeyboard(translation));

const animeMoreExtra = (data: IMediaMore): ExtraEditMessage => Extra.markdown().markup(animeMoreKeyboard(data));

const mangaMoreExtra = (data: IMediaMore): ExtraEditMessage => Extra.markdown().markup(mangaMoreKeyboard(data));

const watchlistMoreInfoExtra = async (anime: IAllSubscriptionResponse[]): Promise<ExtraEditMessage> => {
    const allAnime = await Promise.all(anime.map(async ({ content_id }) => animeSearchTitle(content_id)));

    return Extra.markdown().markup(watchlistMoreInfoKeyboard(allAnime));
};

const readlistMoreInfoExtra = async (manga: IAllSubscriptionResponse[]): Promise<ExtraEditMessage> => {
    const allManga = await Promise.all(manga.map(async ({ content_id }) => mangaSearchTitle(content_id)));

    return Extra.markdown().markup(readlistMoreInfoKeyboard(allManga));
};

export const animeExtra = async ({ user, filter, translation }: IMediaExtraContext): Promise<ExtraEditMessage> => {
    if ('ALL' === filter) {
        return watchlistExtra(translation);
    } if ('NOT_YET_RELEASED' === filter) {
        return soonAnimeExtra(translation);
    } if ('RELEASING' === filter) {
        return airingAnimeExtra(translation);
    } if ('FINISHED' === filter) {
        return completedAnimeExtra(translation);
    } if ('CANCELLED' === filter) {
        return cancelledAnimeExtra(translation);
    }

    return watchlistMoreInfoExtra(user.anime);
};

export const mangaExtra = async ({ user, filter, translation }: IMediaExtraContext): Promise<ExtraEditMessage> => {
    if ('ALL' === filter) {
        return readlistExtra(translation);
    } if ('NOT_YET_RELEASED' === filter) {
        return soonMangaExtra(translation);
    } if ('FINISHED' === filter) {
        return completedMangaExtra(translation);
    } if ('CANCELLED' === filter) {
        return cancelledMangaExtra(translation);
    } if ('RELEASING' === filter) {
        return publishingMangaExtra(translation);
    }

    return readlistMoreInfoExtra(user.manga);
};

export const handleMediaMoreExtra = ({ id, request, translation }: IHandleMediaMoreExtra): ExtraEditMessage => {
    return ('ANIME' === request) ? animeMoreExtra({ id, translation }) : mangaMoreExtra({ id, translation });
};
