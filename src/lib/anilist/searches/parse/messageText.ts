import { ICharacterMessage, IMediaMessage, IStaffMessage, IStudioMessage } from '.';
import { missingPng } from '../../utils/common';
import { charactersAllNames, charactersImage } from './formatting/characters';
import { mediaAllTitle, mediaAverage, mediaChapters, mediaDuration, mediaEndDate, mediaEpisodes, mediaExternalLinks, mediaImage,
mediaIsAdult, mediaKind, mediaNextAiringEpisode, mediaRanking, mediaSeason, mediaStartDate, mediaStatus, mediaStudios, mediaTrailer,
mediaVolumes } from './formatting/media';
import { staffAllNames, staffImage } from './formatting/staff';
import { studiosName } from './formatting/studios';

export const mediaMessage = ({ media, translation }: IMediaMessage): string => {
    const { siteUrl, season, status, isAdult, volumes, trailer, rankings, duration, episodes, chapters, averageScore,
    format, source, startDate, endDate, coverImage, bannerImage, title, countryOfOrigin, nextAiringEpisode,
    externalLinks, studios } = media;

    return translation.t('media', {
        siteUrl,
        season: mediaSeason({ season, translation }),
        status: mediaStatus({ status, translation }),
        image: mediaImage({ coverImage, bannerImage }),
        isAdult: mediaIsAdult({ isAdult, translation }),
        volumes: mediaVolumes({ volumes, translation }),
        trailer: mediaTrailer({ trailer, translation }),
        studios: mediaStudios({ studios, translation }),
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

export const charactersMessage = ({ characters, translation }: ICharacterMessage): string => {
    const { siteUrl, image, name } = characters;

    return translation.t('characters', {
        siteUrl,
        image: charactersImage(image),
        ...charactersAllNames({ name, translation })
    });
};

export const studiosMessage = ({ studios, translation }: IStudioMessage): string => {
    const { siteUrl, name } = studios;

    return translation.t('studios', {
        siteUrl,
        image: missingPng,
        name: studiosName({ name, translation })
    });
};

export const staffMessage = ({ staff, translation }: IStaffMessage): string => {
    const { siteUrl, name, image } = staff;

    return translation.t('staffMask', {
        siteUrl,
        image: staffImage(image),
        ...staffAllNames({ name, translation })
    });
};
