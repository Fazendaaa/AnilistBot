interface Description {
    readonly description: string;
}

interface MediaDescription {
    readonly Media: Description;
}

interface Genres {
    readonly genres: Array<string>;
}

interface MediaGenres {
    readonly Media: Genres;
}

export interface RequestsDescription {
    readonly data: MediaDescription;
}

export interface RequestsGenres {
    readonly data: MediaGenres;
}
