import { config } from 'dotenv';
import GTranslate from 'google-translate-open-api';
import { CallbackSolve, IContext, Reject, Resolve } from '.';

config();

export const translate = async ({ to, src, message }: IContext): Promise<string> => new Promise((resolve: Resolve, reject: Reject) => {
    GTranslate(message, {
        to,
        from: src
    }).then(res => {
        resolve(res.data);
    })
    .catch(reject);
});
