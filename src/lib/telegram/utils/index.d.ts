import { RedisClient } from 'redis';

export interface IRedisUserLanguage {
    readonly key: string;
    readonly language: string;
    readonly client: RedisClient;
}
