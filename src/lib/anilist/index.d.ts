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

export interface IMediaTrailer {
    readonly id: string;
    readonly site: string;
}

export interface ICoverImage {
    readonly large: string;
    readonly medium: string;
}

export interface IMediaTitle {
    readonly native: string;
    readonly romaji: string;
    readonly english: string;
}

export interface IFuzzyDateInt {
    readonly day: number;
    readonly year: number;
    readonly month: number;
}

export interface IMediaExternalLink {
    readonly id: number;
    readonly url: string;
    readonly site: string;
}

export interface IMediaRanking {
    readonly id: number;
    readonly rank: number;
    readonly year: number;
    readonly context: string;
    readonly allTime: boolean;
    readonly type: MediaRankType;
    readonly format: MediaFormat;
    readonly season: MediaSeason;
}

export interface IMediaStreamingEpisode {
    readonly url: string;
    readonly site: string;
    readonly title: string;
    readonly thumbnail: string;
}

export interface IAiringSchedule {
    readonly id: number;
    readonly episode: number;
    readonly mediaIt: number;
    readonly airingAt: number;
    readonly timeUntilAiring: number;
}

export interface ICharacterName {
    readonly last: string;
    readonly first: string;
    readonly native: string;
    readonly alternative: Array<string>;
}

export interface ICharacterImage {
    readonly large: string;
    readonly medium: string;
}

export interface IStaffName {
    readonly last: string;
    readonly first: string;
    readonly native: string;
}

export interface IStaffImage {
    readonly large: string;
    readonly medium: string;
}

export interface IStudio {
    readonly id: number;
    readonly name: string;
    readonly siteUrl: string;
    readonly isFavourite: boolean;
}

export interface IStudioEdge {
    readonly id: number;
    readonly node: IStudio;
    readonly isMain: boolean;
    readonly favouriteOrder: number;
}

export interface IPageInfo {
    readonly total: number;
    readonly perPage: number;
    readonly lastPage: number;
    readonly currentPage: number;
    readonly hasNextPage: boolean;
}

export interface IStudioConnection {
    readonly nodes: Array<IStudio>;
    readonly edges: Array<IStudioEdge>;
    readonly pageInfo: IPageInfo;
}
