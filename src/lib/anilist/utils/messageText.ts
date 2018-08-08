import { MediaPageContent } from '../utils/queries/inline/inline';
import { I18n } from 'telegraf-i18n';
import moment from 'moment';
import { CoverImage, MediaStatus } from '../index';

interface AdultContext {
    value: boolean,
    translation: I18n;
}

interface StatusContext { 
    translation: I18n;
    status: MediaStatus;
}

interface VolumesContext {
    volumes: number;
    translation: I18n;
}

interface ChaptersContext {
    chapters: number;
    translation: I18n;
}

interface EpisodesContext {
    episodes: number;
    translation: I18n;
}

interface ContentMessage {
    translation: I18n;
    data: MediaPageContent;
}

const dateFormat = 'MMMM Do YYYY';

const imagePreview = ({ medium, large }: CoverImage): string => (null === medium) ? medium : large;

const isAdult = ({ value, translation }: AdultContext): string => (true === value) ? translation.t('isAdult') : '';

const volumesPreview = ({ volumes, translation }: VolumesContext): string => {
    return (null !== volumes) ? translation.t('volumes', { volumes }) : '';
};

const episodesPreview = ({ episodes, translation }: EpisodesContext): string => {
    return (null !== episodes) ? translation.t('episodes', { episodes }) : '';
};

const chaptersPreview = ({ chapters, translation }: ChaptersContext): string => {
    return (null !== chapters) ? translation.t('chapters', { chapters }) : '';
};

const statusPreview = ({ status, translation }: StatusContext): string => {
    if ('FINISHED' === status) {
        return translation.t('finished');
    } if ('RELEASING' === status) {
        return translation.t('releasing');
    } if ('NOT_YET_RELEASED' === status) {
        return translation.t('noYetReleased');
    }

    return translation.t('cancelled');
};

export const contentMessage = ({ data, translation }: ContentMessage): string => translation.t('content', {
    format: data.format,
    season: data.season,
    native: data.title.native,
    romaji: data.title.romaji,
    english: data.title.english,
    popularity: data.popularity,
    image: imagePreview(data.coverImage),
    endDate: moment(data.endDate).format(dateFormat),
    startDate: moment(data.startDate).format(dateFormat),
    isAdult: isAdult({ value: data.isAdult, translation }),
    status: statusPreview({ status: data.status, translation }),
    volumes: volumesPreview({ volumes: data.volumes, translation }),
    episodes: episodesPreview({ episodes: data.episodes, translation }),
    chapters: chaptersPreview({ chapters: data.chapters, translation })
});
