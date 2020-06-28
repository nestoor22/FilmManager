import gql from 'graphql-tag';

export const CREATE_BOARD = gql`
  mutation createBoard($board: BoardInputType!) {
    createBoard(board: $board) {
      id
    }
  }
`;

export const FOLLOW_BOARD = gql`
  mutation followBoard($boardId: ID!) {
    followBoard(boardId: $boardId) {
      ok
    }
  }
`;

export const SET_LAST_VISITED_BOARD = gql`
  mutation setLastVisitedBoard($lastVisitedBoardId: Int) {
    setLastVisitedBoard(lastVisitedBoardId: $lastVisitedBoardId) {
      ok
    }
  }
`;
