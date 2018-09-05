import { I18n } from 'telegraf-i18n';

interface IMinimumKeyboardContext {
    readonly id: number;
    readonly translation: I18n;
}

export interface IMediaKeyboardContext {
    readonly id: number;
    readonly kind: 'ANIME' | 'MANGA';
    readonly translation: I18n;
}

export interface IStaffKeyboardContext extends IMinimumKeyboardContext { }

export interface ICharacterKeyboardContext extends IMinimumKeyboardContext { }
