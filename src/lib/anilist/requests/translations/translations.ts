import { config } from 'dotenv';
import translate from 'translate';
import { TranslateDescriptionContext, TranslateGenresContext } from '..';
import { AnilistTranslationContext } from '.';

config();

translate.key = process.env.GOOGLE_KEY;
// const text = await translate(message, { from: 'en', to });

const verifyAnime = async ({ id, to, message }: AnilistTranslationContext): Promise<string> => {
    return 'foo';
};

const verifyManga = async ({ id, to, message }: AnilistTranslationContext): Promise<string> => {
    return 'foo';
};

const verifyCharacter = async ({ id, to, message }: AnilistTranslationContext): Promise<string> => {
    return 'foo';
};

const verifyStaff = async ({ id, to, message }: AnilistTranslationContext): Promise<string> => {
    return 'foo';
};

export const translateDescription = async ({ id, type, message, translation }: TranslateDescriptionContext): Promise<string> => {
    const to = translation.locale().split('-')[0];

    if ('ANIME' === type) {
        return verifyAnime({ id, to, message });
    } if ('MANGA' === type) {
        return verifyManga({ id, to, message });
    } if ('CHARACTER' === type) {
        return verifyCharacter({ id, to, message });
    }

    return verifyStaff({ id, to, message });
};

export const translateGenres = async ({ id, message, translation }: TranslateGenresContext): Promise<string> => {
    const to = translation.locale().split('-')[0];

    return '';
};
