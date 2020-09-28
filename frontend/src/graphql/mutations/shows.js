import gql from 'graphql-tag';

export const SET_RATING = gql`
  mutation setShowRate($showRateInfo: ShowRateInput!) {
    setShowRate(showRateInfo: $showRateInfo) {
      id
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($showId: Int, $content: String) {
    addReview(showId: $showId, content: $content) {
      ok
    }
  }
`;
