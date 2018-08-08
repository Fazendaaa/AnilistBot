interface Title {
    romaji: string;
    native: string;
    english: string;
}

export const filterTitle = ({ english, native, romaji }: Title): string => {
    if (null !== english) {
        return english;
    } if (null !== native) {
        return native
    }

    return romaji;
};
