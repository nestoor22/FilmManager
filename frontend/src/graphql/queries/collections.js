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
      isBoard
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
      shows {
        title
        posterUrl
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

export const COLLECTION = gql`
  query collection($collectionId: Int!, $collectionType: String!) {
    collection(collectionId: $collectionId, collectionType: $collectionType) {
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
      shows {
        title
        plot
        posterUrl
        showtype
        usersRating
        currentUserRating
        releaseDate
        imdbRating
        genres {
          genreName
        }
        actors {
          name
        }
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
