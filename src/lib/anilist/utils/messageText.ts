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
    startDate: endDatePreview({ date: data.endDate, translation }),
    isAdult: isAdultPreview({ isAdult: data.isAdult, translation }),
    volumes: volumesPreview({ volumes: data.volumes, translation }),
    trailer: trailerPreview({ trailer: data.trailer, translation }),
    endDate: startDatePreview({ date: data.startDate, translation}),
    ranking: rankingPreview({ rankings: data.rankings, translation }),
    duration: durationPreview({ duration: data.duration, translation }),
    episodes: episodesPreview({ episodes: data.episodes, translation }),
    chapters: chaptersPreview({ chapters: data.chapters, translation }),
    average: averagePreview({ average: data.averageScore, translation }),
    image: imagePreview({ coverImage: data.coverImage, bannerImage: data.bannerImage }),
    ...allTitlePreview({ title: data.title, countryOfOrigin: data.countryOfOrigin, translation })
});
