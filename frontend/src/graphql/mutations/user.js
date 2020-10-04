import gql from 'graphql-tag';

export const DELETE_RATING = gql`
  mutation deleteShowRate($showRateId: Int!) {
    deleteShowRate(showRateId: $showRateId) {
      ok
    }
  }
`;

export const FOLLOW_USER = gql`
  mutation followUser($followedUserId: Int!) {
    followUser(followedUserId: $followedUserId) {
      ok
    }
  }
`;

export const UNFOLLOW_USER = gql`
  mutation unfollowUser($followedUserId: Int!) {
    unfollowUser(followedUserId: $followedUserId) {
      ok
    }
  }
`;
