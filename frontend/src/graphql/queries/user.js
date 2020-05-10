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
      }
      rating
    }
  }
`;

export const USER_NAME = gql`
  {
    user {
      id
      firstName
      lastName
    }
  }
`;
