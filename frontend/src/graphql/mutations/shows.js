import gql from 'graphql-tag';

export const SET_RATING = gql`
  mutation setShowRate($showRateInfo: ShowRateInput!) {
    setShowRate(showRateInfo: $showRateInfo) {
      id
    }
  }
`;
