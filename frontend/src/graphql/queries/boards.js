import gql from 'graphql-tag';

export const BOARDS = gql`
  query boards($userBoards: Boolean!, $filters: FiltersType) {
    boards(userBoards: $userBoards, filters: $filters) {
      id
      sharedTimes
      backgroundColor
      backgroundImage
      followers
      averageShowRating
      isFollowed
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
      description
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
