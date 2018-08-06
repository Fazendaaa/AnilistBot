import { fetchData } from 'endeavor';

export const fetchAnime = () => {
    const query = 'query ($id: Int) { # Define which variables will be used in the query (id)\n\
        Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)\n\
            id\n\
            title {\n\
                romaji\n\
                english\n\
                native\n\
            }\n\
        }\n\
    }';
    const variables = {
        id: 15125
    };

    return fetchData({ query, variables });
};
