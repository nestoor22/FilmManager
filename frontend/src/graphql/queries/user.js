import gql from 'graphql-tag';

export const USER = gql`
  {
    user {
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
  }
`;

export const USER_NAME = gql`
  {
    user {
      firstName
      lastName
    }
  }
`;
