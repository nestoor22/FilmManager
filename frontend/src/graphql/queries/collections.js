import gql from 'graphql-tag';

export const COLLECTIONS = gql`
  query collections(
    $userFollowedBoards: Boolean
    $userBoards: Boolean
    $filters: FiltersType
  ) {
    collections(
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
      description
      tags
      isOpen
      name
      createdAt
      isOwner
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
