import gql from 'graphql-tag';

export const SHOWS_QUERY = gql`
    query shows($showType: String, $page: Int, $orderBy: String)
    {
        shows(showType: $showType, page: $page, orderBy: $orderBy)
        {
            showId
            title
            releaseDate
            posterUrl
        }
    }
`;
export default SHOWS_QUERY;