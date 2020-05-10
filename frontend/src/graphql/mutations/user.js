import gql from 'graphql-tag';

export const DELETE_RATING = gql`
  mutation deleteShowRate($showRateId: Int!) {
    deleteShowRate(showRateId: $showRateId) {
      ok
    }
  }
`;
