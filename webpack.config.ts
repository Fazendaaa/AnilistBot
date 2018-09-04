import { join } from 'path';

const nonRelative = (path: string): string => join(__dirname, `./src/lib/${path}`);

module.exports = {
    target: 'node',
    mode: 'development',
    entry: join(__dirname, 'src/main.ts'),
    node: {
        __dirname: false
    },
    output: {
        filename: 'main.js',
        path: join(__dirname, 'dist')
    },
    resolve: {
        alias: {
            main: join(__dirname, './src/main.ts'),
            inline: nonRelative('telegram/inline.ts'),
            callback: nonRelative('telegram/callback.ts'),
            keyboard: nonRelative('telegram/keyboard/menu.ts'),
            // https://github.com/NodeRedis/node_redis/issues/790#issuecomment-318904983
            hiredis: join(__dirname, './src/aliases/hiredis.ts'),
            searches: nonRelative('anilist/searches/searches.ts'),
            'telegraf-redis': nonRelative('telegram/utils/redis.ts'),
            'telegraf-parse': nonRelative('telegram/utils/parse.ts'),
            'telegraf-bot-typings': nonRelative('telegram/index.d.ts'),
            'user-cache': nonRelative('telegram/middleware/userCache.ts')
        },
        extensions: [
            '.js',
            '.ts',
            '.tsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /ci/
                ]
            },
            {
                test: /\.gql?$/,
                use: [
                    {
                        loader: 'webpack-graphql-loader',
                        options: {
                            // validate: true,
                            // schema: "./path/to/schema.json",
                            // removeUnusedFragments: true
                            // etc. See "Loader Options" below
                        }
                    }
                ]
            }
        ]
    }
};
