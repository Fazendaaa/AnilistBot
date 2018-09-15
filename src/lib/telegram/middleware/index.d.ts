import { ContextMessageUpdate } from 'telegraf';
import RedisSession from 'telegraf-session-redis';
import { UpdateType } from 'telegraf/typings/telegram-types';
import * as tt from '../../../../node_modules/telegraf/typings/telegram-types';

interface IMyRedis extends RedisSession {
    language: string;
}

export interface IHandleNext {
    readonly redis: IMyRedis;
    readonly updateType: UpdateType;
    readonly callbackQuery: tt.CallbackQuery;
}

export interface IUserLanguage {
    readonly telegram: string;
    readonly language: string;
}
