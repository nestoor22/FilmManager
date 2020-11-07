import gql from 'graphql-tag';

export const CREATE_COLLECTION = gql`
  mutation createCollection($collection: CollectionInputType!) {
    createCollection(collection: $collection) {
      id
    }
  }
`;

export const FOLLOW_BOARD = gql`
  mutation followBoard($boardId: ID!, $unfollow: Boolean) {
    followBoard(boardId: $boardId, unfollow: $unfollow) {
      ok
    }
  }
`;
