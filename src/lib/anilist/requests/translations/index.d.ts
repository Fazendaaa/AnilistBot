import { GoogleTranslation } from "google-translate";

export type Reject = (err: Error) => void;

export type Resolve = (translated: string) => void;

export type CallbackSolve = GoogleTranslation | GoogleTranslation[];

export interface Context {
    readonly to: string;
    readonly src: string;
    readonly message: string | string[];
}
