import gql from "graphql-tag";

export const CREATE_BOARD = gql`
  mutation createBoard($board: BoardInputType!) {
    createBoard(board: $board) {
      id
    }
  }
`;
