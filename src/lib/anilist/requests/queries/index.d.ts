interface IDescription {
    readonly description: string;
}

interface IMediaDescription {
    readonly Media: IDescription;
}

interface IGenres {
    readonly genres: Array<string>;
}

interface IMediaGenres {
    readonly Media: IGenres;
}

export interface IRequestsDescription {
    readonly data: IMediaDescription;
}

export interface IRequestsGenres {
    readonly data: IMediaGenres;
}
