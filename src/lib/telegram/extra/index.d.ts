import { I18n } from 'telegraf-i18n';
import { LocationRequest } from 'telegraf-bot-typings';
import { MediaStatus } from '../../anilist';

export interface IMediaExtraContext {
    readonly translation: I18n;
    readonly request: MediaStatus;
}

export interface ILocationExtraContext {
    readonly translation: I18n;
    readonly request: LocationRequest;
}
