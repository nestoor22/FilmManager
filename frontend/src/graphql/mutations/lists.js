import gql from 'graphql-tag';

export const CREATE_LIST = gql`
  mutation createList($boardId: Int, $showsOnList: [Int], $listName: String) {
    createList(
      boardId: $boardId
      showsOnList: $showsOnList
      listName: $listName
    ) {
      id
    }
  }
`;
