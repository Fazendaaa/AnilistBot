import moment from 'moment';
import { MediaPageInline } from '../queries/inline';
import { I18n } from 'telegraf-i18n';
import { isAdultPreview, formatPreview, statusPreview, volumesPreview, episodesPreview, chaptersPreview, imagePreview, seasonPreview, averagePreview, allTitlePreview } from './preview';

interface InlineMessage {
    translation: I18n;
    data: MediaPageInline;
}

const dateFormat = 'MMMM Do YYYY';

export const inlineMessage = ({ data, translation }: InlineMessage): string => translation.t('inline', {
    siteUrl: data.siteUrl,
    format: formatPreview({ format: data.format, translation}),
    season: seasonPreview({ season: data.season, translation }),
    status: statusPreview({ status: data.status, translation }),
    isAdult: isAdultPreview({ isAdult: data.isAdult, translation }),
    volumes: volumesPreview({ volumes: data.volumes, translation }),
    episodes: episodesPreview({ episodes: data.episodes, translation }),
    chapters: chaptersPreview({ chapters: data.chapters, translation }),
    average: averagePreview({ average: data.averageScore, translation }),
    endDate: moment(data.endDate).locale(translation.locale()).format(dateFormat),
    startDate: moment(data.startDate).locale(translation.locale()).format(dateFormat),
    image: imagePreview({ coverImage: data.coverImage, bannerImage: data.bannerImage }),
    ...allTitlePreview({ title: data.title, countryOfOrigin: data.countryOfOrigin, translation })
});
