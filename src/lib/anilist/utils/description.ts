interface ContentContext {
    season: string;
    description: string;
}

export const contentDescription = ({ season, description  }: ContentContext): string => {
    if (null !== season) {
        return season;
    }

    return description;
};
