import gql from 'graphql-tag';

export const SHOWS = gql`
    query shows($showType: String, $isRandom: Boolean, $orderBy: String){
        shows(showType: $showType, isRandom: $isRandom, orderBy: $orderBy){
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