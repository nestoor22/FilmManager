import gql from "graphql-tag";

export const BOARDS = gql`
  query boards {
    boards {
      id
      sharedTimes
      backgroundColor
      isOpen
      name
      createdAt
    }
    lastVisitedBoards {
      id
      sharedTimes
      backgroundColor
      isOpen
      name
      createdAt
    }
  }
`;
