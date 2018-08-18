import { mediaSeason, mediaStatus, mediaKind, mediaImage, mediaIsAdult, mediaVolumes, mediaTrailer, mediaRanking,
mediaDuration, mediaEpisodes, mediaChapters, mediaAverage, mediaEndDate, mediaAllTitle, mediaStartDate
} from '../formatting/media';
import { MediaMessage, CharacterMessage } from '.';
import { charactersImage, charactersAllNames } from '../formatting/characters';

export const mediaMessage = ({ media, translation }: MediaMessage): string => {
    const { siteUrl, season, status, isAdult, volumes, trailer, rankings, duration, episodes, chapters, averageScore,
    format, source, startDate, endDate, coverImage, bannerImage, title, countryOfOrigin } = media;

    return translation.t('media', {
        siteUrl,
        season: mediaSeason({ season, translation }),
        status: mediaStatus({ status, translation }),
        ...mediaKind({ format, source, translation }),
        image: mediaImage({ coverImage, bannerImage }),
        isAdult: mediaIsAdult({ isAdult, translation }),
        volumes: mediaVolumes({ volumes, translation }),
        trailer: mediaTrailer({ trailer, translation }),
        ranking: mediaRanking({ rankings, translation }),
        duration: mediaDuration({ duration, translation }),
        episodes: mediaEpisodes({ episodes, translation }),
        chapters: mediaChapters({ chapters, translation }),
        average: mediaAverage({ averageScore, translation }),
        endDate: mediaEndDate({ endDate, status, translation }),
        ...mediaAllTitle({ title, countryOfOrigin, translation }),
        startDate: mediaStartDate({ startDate, status, translation })
    });
};

export const characterMessage = ({ characters, translation }: CharacterMessage): string => {
    const { siteUrl, image, name } = characters;

    return translation.t('characters', {
        siteUrl,
        image: charactersImage(image),
        ...charactersAllNames({ name, translation })
    });
};