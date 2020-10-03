import gql from 'graphql-tag';

export const USER = gql`
  {
    user {
      id
      firstName
      lastName
      email
      photo
      favoriteShow
      bio
      city
      country
      birthday
    }
    showsRatings {
      id
      show {
        showId
        title
        posterUrl
        releaseDate
        currentUserRating
      }
    }
  }
`;

export const USER_NAME = gql`
  {
    userName {
      id
      firstName
      lastName
    }
  }
`;

export const USERS = gql`
  query users($search: String, $offset: Int, $limit: Int) {
    users(search: $search, offset: $offset, limit: $limit) {
      id
      firstName
      lastName
      email
      city
      country
      birthday
    }
  }
`;
