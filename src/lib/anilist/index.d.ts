type MediaFormat = 'TV' |
                   'TV_SHORT' |
                   'MOVIE' |
                   'SPECIAL' |
                   'OVA' |
                   'ONA' |
                   'MUSIC' |
                   'MANGA' |
                   'NOVEL' |
                   'ONE_SHOT'

type MediaStatus = 'FINISHED' |
                   'RELEASING' |
                   'NOT_YET_RELEASED' |
                   'CANCELLED'

export interface CoverImage {
    large: string;
    medium: string;
}

export interface MediaTitle {
    native: string;
    romaji: string;
    english: string;
}

export interface FuzzyDateInt {
    day: number;
    year: number;
    month: number;
}
