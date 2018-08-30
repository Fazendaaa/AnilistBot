import { IStaffNameContext, IStaffNameResponse } from '..';
import { IStaffImage } from '../../..';
import { errorPng } from '../../../utils/common';

const isEmpty = (input: string): boolean => {
    const matched = input.match(/\s*/gm)[0];

    return input.length === matched.length;
};

export const staffAllNames = ({ name, translation }: IStaffNameContext): IStaffNameResponse => {
    const { native, first, last } = name;
    let complete = '';

    if (null !== first) {
        complete += first;
    } if (null !== last) {
        complete += ` ${last}`;
    }

    return {
        name: ('' !== complete) ? translation.t('name', { name: complete }) : '',
        native: (null !== native && true !== isEmpty(native)) ? translation.t('native', { native }) : ''
    };
};

export const staffImage = ({ large, medium }: IStaffImage): string => {
    if (null !== large) {
        return large;
    } if (null !== medium) {
        return medium;
    }

    return errorPng;
};
