import gql from 'graphql-tag';

export const CREATE_LIST = gql`
  mutation createList(
    $boardId: Int
    $description: String
    $showsOnList: [Int]
    $listName: String
  ) {
    createList(
      boardId: $boardId
      description: $description
      showsOnList: $showsOnList
      listName: $listName
    ) {
      id
    }
  }
`;
