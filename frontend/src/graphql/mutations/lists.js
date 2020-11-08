import gql from 'graphql-tag';

export const CREATE_LIST_ON_BOARD = gql`
  mutation createListOnBoard($boardId: Int, $showsOnList: [Int], $listName: String) {
    createListOnBoard(
      boardId: $boardId
      showsOnList: $showsOnList
      listName: $listName
    ) {
      id
    }
  }
`;

export const ADD_SHOW_TO_LIST = gql`
  mutation addShowToList($listId: Int, $showId: Int) {
    addShowToList(listId: $listId, showId: $showId) {
      id
    }
  }
`;
