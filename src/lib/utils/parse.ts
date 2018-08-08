interface Title {
    romaji: string;
    native: string;
    english: string;
}

export const sanitize = ({ message }: { message: string }): string => message.replace(/(?:=\(|:0|:o|: o|: 0)/, ': o');

export const filterTitle = ({ english, native, romaji }: Title): string => {
    if (null !== english) {
        return english;
    } if (null !== native) {
        return native
    }

    return romaji;
};
