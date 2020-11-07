import gql from 'graphql-tag';

export const BOARDS = gql`
  query boards(
    $userFollowedBoards: Boolean
    $userBoards: Boolean
    $filters: FiltersType
  ) {
    boards(
      userFollowedBoards: $userFollowedBoards
      userBoards: $userBoards
      filters: $filters
    ) {
      id
      sharedTimes
      followers
      averageShowRating
      isFollowed
      showsNumber
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
      canEdit
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
