export type MediaType = 'ANIME' |
                        'MANGA'

export type MediaRankType = 'RATED' |
                            'POPULAR'

export type MediaSeason = 'FALL' |
                          'WINTER' |
                          'SPRING' |
                          'SUMMER'

export type MediaStatus = 'FINISHED' |
                          'RELEASING' |
                          'CANCELLED' |
                          'NOT_YET_RELEASED'

export type MediaSource = 'MANGA' |
                          'OTHER' |
                          'ORIGINAL' |
                          'VIDEO_GAME' |
                          'LIGHT_NOVEL' |
                          'VISUAL_NOVEL'

export type MediaFormat = 'TV' |
                          'OVA' |
                          'ONA' |
                          'MOVIE' |
                          'MUSIC' |
                          'MANGA' |
                          'NOVEL' |
                          'SPECIAL' |
                          'ONE_SHOT' |
                          'TV_SHORT'

export type StaffLanguage = 'KOREAN' |
                            'FRENCH' |
                            'GERMAN' |
                            'HEBREW' |
                            'ENGLISH' |
                            'ITALIAN' |
                            'SPANISH' |
                            'JAPANESE' |
                            'HUNGARIAN' |
                            'PORTUGUESE'

export interface MediaTrailer {
    readonly id: string;
    readonly site: string;
}

export interface CoverImage {
    readonly large: string;
    readonly medium: string;
}

export interface MediaTitle {
    readonly native: string;
    readonly romaji: string;
    readonly english: string;
}

export interface FuzzyDateInt {
    readonly day: number;
    readonly year: number;
    readonly month: number;
}

export interface MediaExternalLink {
    readonly id: number;
    readonly url: string;
    readonly site: string;
}

export interface MediaRanking {
    readonly id: number;
    readonly rank: number;
    readonly year: number;
    readonly context: string;
    readonly allTime: boolean;
    readonly type: MediaRankType;
    readonly format: MediaFormat;
    readonly season: MediaSeason;
}

export interface MediaStreamingEpisode {
    readonly url: string;
    readonly site: string;
    readonly title: string;
    readonly thumbnail: string;
}

export interface AiringSchedule {
    readonly id: number;
    readonly episode: number;
    readonly mediaIt: number;
    readonly airingAt: number;
    readonly timeUntilAiring: number;
}

export interface CharacterName {
    readonly last: string;
    readonly first: string;
    readonly native: string;
    readonly alternative: Array<string>;
}

export interface CharacterImage {
    readonly large: string;
    readonly medium: string;
}

export interface StaffName {
    readonly last: string;
    readonly first: string;
    readonly native: string;
}

export interface StaffImage {
    readonly large: string;
    readonly medium: string;
}

export interface Studio {
    readonly id: number;
    readonly name: string;
    readonly siteUrl: string;
    readonly isFavourite: boolean;
}

export interface StudioEdge {
    readonly id: number;
    readonly node: Studio;
    readonly isMain: boolean;
    readonly favouriteOrder: number;
}

export interface PageInfo {
    readonly total: number;
    readonly perPage: number;
    readonly lastPage: number;
    readonly currentPage: number;
    readonly hasNextPage: boolean;
}

export interface StudioConnection {
    readonly nodes: Array<Studio>;
    readonly edges: Array<StudioEdge>;
    readonly pageInfo: PageInfo;
}
