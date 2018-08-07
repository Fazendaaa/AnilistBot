import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

export interface MockInfo {
    toTest: string;
    location: string;
}

export interface Mock {
    input: any;
    output: any;
    kind: string;
    label: string;
}

export interface BaseMock {
    locale: string;
    mocks: Array<Mock>;
}

export const readMock = ({ toTest, location }: MockInfo): Array<BaseMock> => {
    const idioms = ['en-us', 'pt-br'];
    const basePath = join(__dirname, '__mocks__/', location);

    console.log(toTest, location);

    return idioms.reduce((acc, locale) => {
        const file = `${basePath}/${locale}/${toTest}.json`;

        if (true === existsSync(file)) {
            acc.push({
                locale,
                mocks: JSON.parse(readFileSync(file, 'utf8'))
            });
        }

        return acc;
    }, []);
};
