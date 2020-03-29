import gql from 'graphql-tag';

export const ALL_SHOWS = gql`
    query{
        shows{
            showId
            title
            plot
            posterUrl
            releaseDate
            imdbRating
            genres{
                genreName
            }
            actors{
                name
            }
        }
    }
`;