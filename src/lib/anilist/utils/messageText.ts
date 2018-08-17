import { MediaPageInline } from '../queries/inline';
import { I18n } from 'telegraf-i18n';
import { isAdultPreview, formatPreview, statusPreview, volumesPreview, episodesPreview, chaptersPreview, imagePreview, seasonPreview, averagePreview, allTitlePreview, rankingPreview, trailerPreview, sourcePreview, durationPreview, startDatePreview, endDatePreview } from './preview';

interface InlineMessage {
    translation: I18n;
    data: MediaPageInline;
}

export const inlineMessage = ({ data, translation }: InlineMessage): string => translation.t('inline', {
    siteUrl: data.siteUrl,
    format: formatPreview({ format: data.format, translation}),
    source: sourcePreview({ source: data.source, translation }),
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
    endDate: endDatePreview({ date: data.endDate, status: data.status, translation}),
    image: imagePreview({ coverImage: data.coverImage, bannerImage: data.bannerImage }),
    startDate: startDatePreview({ date: data.endDate, status: data.status, translation }),
    ...allTitlePreview({ title: data.title, countryOfOrigin: data.countryOfOrigin, translation })
});
