import { RedisClient } from 'redis';
import { IDBUser } from '../../database/user';

export type PromiseFunction = (value: boolean) => void;

export interface IRedisUserLanguage {
    readonly id: number;
    readonly language: string;
}
