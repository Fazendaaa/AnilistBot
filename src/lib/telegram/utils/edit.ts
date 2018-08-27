import { RequestsFiled } from '..';

export const isEditable = (request: RequestsFiled): boolean => {
    return ('LIST' === request || 'GENRES' === request || 'DESCRIPTION' === request) ? false : true;
};
