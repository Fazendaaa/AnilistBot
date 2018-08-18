import { Media } from '../queries/searches';
import { I18n } from 'telegraf-i18n';
import { isAdultPreview, statusPreview, volumesPreview, episodesPreview, chaptersPreview, imagePreview, seasonPreview,
averagePreview, allTitlePreview, rankingPreview, trailerPreview, durationPreview, startDatePreview, endDatePreview,
kindPreview } from './preview';

interface InlineMessage {
    data: Media;
    translation: I18n;
}

export const mediaMessage = ({ data, translation }: InlineMessage): string => translation.t('media', {
    siteUrl: data.siteUrl,
    season: seasonPreview({ season: data.season, translation }),
    status: statusPreview({ status: data.status, translation }),
    isAdult: isAdultPreview({ isAdult: data.isAdult, translation }),
    volumes: volumesPreview({ volumes: data.volumes, translation }),
    trailer: trailerPreview({ trailer: data.trailer, translation }),
    ranking: rankingPreview({ rankings: data.rankings, translation }),
    duration: durationPreview({ duration: data.duration, translation }),
    episodes: episodesPreview({ episodes: data.episodes, translation }),
    chapters: chaptersPreview({ chapters: data.chapters, translation }),
    average: averagePreview({ average: data.averageScore, translation }),
    ...kindPreview({ format: data.format, source: data.source, translation }),
    endDate: endDatePreview({ date: data.endDate, status: data.status, translation}),
    image: imagePreview({ coverImage: data.coverImage, bannerImage: data.bannerImage }),
    startDate: startDatePreview({ date: data.startDate, status: data.status, translation }),
    ...allTitlePreview({ title: data.title, countryOfOrigin: data.countryOfOrigin, translation })
});
