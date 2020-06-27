import gql from 'graphql-tag';

export const BOARDS = gql`
  query boards($openBoards: Boolean!) {
    boards(openBoards: $openBoards) {
      id
      sharedTimes
      backgroundColor
      backgroundImage
      followers
      averageShowRating
      showsNumber
      members {
        firstName
        lastName
        email
        photo
      }
      description
      tags
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
      owner {
        id
        firstName
        lastName
        email
        photo
      }
      members {
        firstName
        lastName
        email
        photo
      }
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
