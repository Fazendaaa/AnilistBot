interface MediaDescription {
    description: string;
}

interface MediaResponse {
    Media: MediaDescription;
}

export interface CallbackResponse {
    data: MediaResponse;
}
