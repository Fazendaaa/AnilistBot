import { mediaSeason, mediaStatus, mediaKind, mediaImage, mediaIsAdult, mediaVolumes, mediaTrailer, mediaRanking,
mediaDuration, mediaEpisodes, mediaChapters, mediaAverage, mediaEndDate, mediaAllTitle, mediaStartDate,
mediaNextAiringEpisode, mediaExternalLinks } from './formatting/media';
import { MediaMessage, CharacterMessage, StudioMessage, StaffMessage } from '.';
import { charactersImage, charactersAllNames } from './formatting/characters';
import { missingPng } from '../../utils/common';
import { staffImage, staffAllNames } from './formatting/staff';
import { studiosName } from './formatting/studios';

export const mediaMessage = ({ media, translation }: MediaMessage): string => {
    const { siteUrl, season, status, isAdult, volumes, trailer, rankings, duration, episodes, chapters, averageScore,
    format, source, startDate, endDate, coverImage, bannerImage, title, countryOfOrigin, nextAiringEpisode,
    externalLinks } = media;

    return translation.t('media', {
        siteUrl,
        season: mediaSeason({ season, translation }),
        status: mediaStatus({ status, translation }),
        image: mediaImage({ coverImage, bannerImage }),
        isAdult: mediaIsAdult({ isAdult, translation }),
        volumes: mediaVolumes({ volumes, translation }),
        trailer: mediaTrailer({ trailer, translation }),
        kind: mediaKind({ format, source, translation }),
        ranking: mediaRanking({ rankings, translation }),
        duration: mediaDuration({ duration, translation }),
        episodes: mediaEpisodes({ episodes, translation }),
        chapters: mediaChapters({ chapters, translation }),
        average: mediaAverage({ averageScore, translation }),
        endDate: mediaEndDate({ endDate, status, translation }),
        ...mediaAllTitle({ title, countryOfOrigin, translation }),
        startDate: mediaStartDate({ startDate, status, translation }),
        externalLinks: mediaExternalLinks({ externalLinks, translation }),
        nextAiringEpisode: mediaNextAiringEpisode({ nextAiringEpisode, translation })
    });
};

export const charactersMessage = ({ characters, translation }: CharacterMessage): string => {
    const { siteUrl, image, name } = characters;

    return translation.t('characters', {
        siteUrl,
        image: charactersImage(image),
        ...charactersAllNames({ name, translation })
    });
};

export const studiosMessage = ({ studios, translation }: StudioMessage): string => {
    const { siteUrl, name } = studios;

    return translation.t('studios', {
        siteUrl,
        image: missingPng,
        name: studiosName({ name, translation })
    });
};

export const staffMessage = ({ staff, translation }: StaffMessage): string => {
    const { siteUrl, name, image } = staff;

    return translation.t('staffMask', {
        siteUrl,
        image: staffImage(image),
        ...staffAllNames({ name, translation })
    });
};
