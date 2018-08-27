import { MenuContext } from '.';

export const handleMenu = ({ type, translation }: MenuContext): string => {
    if ('GUIDE' === type) {
        return translation.t('guideOptions');
    } if ('READLIST' === type) {
        return translation.t('readlistOptions');
    } if ('WATCHLIST' === type) {
        return translation.t('watchlistOptions');
    } if ('COUNTDOWN' === type) {
        return translation.t('countdownOptions');
    }
    
    return translation.t('userOptions', { notifications: 'foo', time: 'bar' });
};
