interface Description {
    description: string;
}

interface MediaDescription {
    Media: Description;
}

interface Genres {
    genres: Array<string>;
}

interface MediaGenres {
    Media: Genres;
}

export interface CallbackDescription {
    data: MediaDescription;
}

export interface CallbackGenres {
    data: MediaGenres;
}
