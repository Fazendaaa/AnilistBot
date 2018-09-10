declare module 'node-google-timezone' {
    export interface Options {
        readonly location: string;
        readonly language: string;
        readonly timestamp: number;
    }

    export interface RawResponse {
        readonly status: string;
        readonly dstOffset: number;
        readonly rawOffset: number;
        readonly timeZoneId: string;
        readonly timeZoneName: string;
    }

    export interface GoogleTimezoneAPI {
        readonly options: Options;
        readonly local_timestamp: number;
        readonly raw_response: RawResponse;
    }

    export function data(lat: string | number, lng: string | number, timestamp: number, cb: (err: Error, tz: GoogleTimezoneAPI) => void): void
}
