import gql from 'graphql-tag';

export const SHOWS = gql`
  query shows(
    $showType: String
    $isRandom: Boolean
    $orderBy: String
    $page: Int
  ) {
    shows(
      showType: $showType
      isRandom: $isRandom
      orderBy: $orderBy
      page: $page
    ) {
      showId
      title
      plot
      posterUrl
      showtype
      usersRating
      currentUserRating
      releaseDate
      imdbRating
      genres {
        genreName
      }
      actors {
        name
      }
    }
    showsNumberOfPages(showType: $showType)
  }
`;

export const SINGLE_SHOW = gql`
  query shows($id: Int) {
    shows(id: $id) {
      showId
      title
      plot
      posterUrl
      showtype
      usersRating
      currentUserRating
      releaseDate
      imdbRating
      genres {
        genreName
      }
      actors {
        name
      }
    }
  }
`;
