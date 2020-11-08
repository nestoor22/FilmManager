import gql from 'graphql-tag';

export const COLLECTIONS = gql`
  query collections(
    $userFollowedCollections: Boolean
    $userCollections: Boolean
    $filters: FiltersType
  ) {
    collections(
      userFollowedCollections: $userFollowedCollections
      userCollections: $userCollections
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
