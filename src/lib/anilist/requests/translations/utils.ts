import { config } from 'dotenv';
import googleTranslate, { GoogleTranslation } from 'google-translate';
import { CallbackSolve, Context, Reject, Resolve } from '.';

config();

const google = googleTranslate(process.env.GOOGLE_KEY);

export const translate = async ({ to, src, message }: Context): Promise<string> => new Promise((resolve: Resolve, reject: Reject) => {
    google.translate(message, src, to, (err: Error, translated: CallbackSolve) => {
        if (null !== err) {
            reject(err);
        } if (Array.isArray(translated)) {
            resolve(translated.map(element => element.translatedText).join(','));
        }

        resolve((<GoogleTranslation>translated).translatedText);
    });
});
