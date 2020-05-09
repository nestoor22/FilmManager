import gql from 'graphql-tag';

export const USER = gql`
  {
    user {
      firstName
      lastName
      email
      bio
      city
      country
      birthday
    }
  }
`;
