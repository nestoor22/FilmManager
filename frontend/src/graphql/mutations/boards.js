import gql from 'graphql-tag';

export const CREATE_BOARD = gql`
  mutation createBoard($board: BoardInputType!) {
    createBoard(board: $board) {
      id
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
