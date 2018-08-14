import moment from 'moment';
import { MediaPageContent } from '../utils/queries/inline/inline';
import { I18n } from 'telegraf-i18n';
import { isAdultPreview, formatPreview, statusPreview, volumesPreview, episodesPreview, chaptersPreview, imagePreview, seasonPreview, averagePreview, allTitlePreview } from './preview';

interface ContentMessage {
    translation: I18n;
    data: MediaPageContent;
}

const dateFormat = 'MMMM Do YYYY';

export const contentMessage = ({ data, translation }: ContentMessage): string => translation.t('content', {
    siteUrl: data.siteUrl,
    endDate: moment(data.endDate).format(dateFormat),
    startDate: moment(data.startDate).format(dateFormat),
    format: formatPreview({ format: data.format, translation}),
    season: seasonPreview({ season: data.season, translation }),
    status: statusPreview({ status: data.status, translation }),
    isAdult: isAdultPreview({ isAdult: data.isAdult, translation }),
    volumes: volumesPreview({ volumes: data.volumes, translation }),
    episodes: episodesPreview({ episodes: data.episodes, translation }),
    chapters: chaptersPreview({ chapters: data.chapters, translation }),
    average: averagePreview({ average: data.averageScore, translation }),
    image: imagePreview({ coverImage: data.coverImage, bannerImage: data.bannerImage }),
    ...allTitlePreview({ title: data.title, countryOfOrigin: data.countryOfOrigin, translation })
});
