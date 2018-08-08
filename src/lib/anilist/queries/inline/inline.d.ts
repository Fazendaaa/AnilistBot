interface Media {
    id: number;
    season: string;
    coverImage: {
        large: string;
        medium: string;
    };
    title: {
        native: string;
        romaji: string;
        english: string;
    }
}

export interface QueryPageContent {
    data: {
        Page: {
            media: Array<Media>
        }
    }
}
