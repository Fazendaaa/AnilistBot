import { errorPng } from '../utils/common';
import { CharacterImage } from '..';
import { CharactersNameResponse, CharactersNameContext } from '.';

const joining = (input: Array<string>): string => input.reduce((acc, cur) => acc + `\t\t • _${cur}_\n`, '');

export const charactersImage = ({ medium, large }: CharacterImage): string => {
    if (null !== large) {
        return large;
    } if (null !== medium) {
        return medium;
    }

    return errorPng;
};

export const charactersAllNames = ({ name, translation }: CharactersNameContext): CharactersNameResponse => {
    const { native, first, last, alternative } = name;
    let complete = '';
    
    if (null !== first) {
        complete += first;
    } if (null !== last) {
        complete += ' ' + last;
    }

    return {
        native: (null !== native) ? translation.t('native', { native }) : '',
        name: ('' !== complete) ? translation.t('name', { name: complete }) : '',
        alternative: (null !== alternative) ? translation.t('alternative', { alternative: joining(alternative) }) : ''
    };
};
