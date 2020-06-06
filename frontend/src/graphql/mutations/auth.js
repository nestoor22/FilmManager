import gql from 'graphql-tag';

export const SIGN_IN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      email
      firstName
      lastName
    }
  }
`;

export const SIGN_IN_WITH_GOOGLE_MUTATION = gql`
  mutation signInWithGoogle($accessToken: String!, $user: UserInput!) {
    signInWithGoogle(accessToken: $accessToken, user: $user) {
      id
      email
      firstName
      lastName
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($user: UserInput!, $photo: Upload) {
    createUser(user: $user, photo: $photo) {
      id
    }
  }
`;

export const LOG_OUT = gql`
  mutation logOut {
    logOut {
      ok
    }
  }
`;
