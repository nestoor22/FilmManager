import gql from 'graphql-tag';

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

export const BOARD = gql`
  query board($boardId: Int!) {
    board(boardId: $boardId) {
      id
      sharedTimes
      backgroundColor
      isOpen
      name
      createdAt
      lists {
        id
        name
        showsOnList {
          id
          show {
            showId
            posterUrl
            title
            releaseDate
          }
        }
      }
    }
  }
`;
