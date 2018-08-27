export interface DBUser {
    readonly _id: number;
    readonly notify: boolean;
    readonly timezone: string;
    readonly language: string;
}
