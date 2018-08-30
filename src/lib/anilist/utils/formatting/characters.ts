import { ICharactersNameContext, ICharactersNameResponse } from '.';
import { ICharacterImage } from '../../';
import { errorPng } from '../../utils/common';

const joining = (input: string[]): string => input.reduce((acc, cur) => `${acc}\t\t • _${cur}_\n`, '');

export const charactersImage = ({ medium, large }: ICharacterImage): string => {
    if (null !== large) {
        return large;
    } if (null !== medium) {
        return medium;
    }

    return errorPng;
};

export const charactersAllNames = ({ name, translation }: ICharactersNameContext): ICharactersNameResponse => {
    const { native, first, last, alternative } = name;
    let complete = '';
    let aka = false;

    if (null !== first) {
        complete += first;
    } if (null !== last) {
        complete += ` ${last}`;
    } if (null !== alternative && '' !== alternative[0]) {
        aka = true;
    }

    return {
        native: (null !== native) ? translation.t('native', { native }) : '',
        name: ('' !== complete) ? translation.t('name', { name: complete }) : '',
        alternative: (true === aka) ? translation.t('alternative', { alternative: joining(alternative) }) : ''
    };
};
