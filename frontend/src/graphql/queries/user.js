import gql from 'graphql-tag';

export const USER = gql`
  query user($userId: Int) {
    user(userId: $userId) {
      id
      firstName
      lastName
      email
      photo
      favoriteShow
      bio
      city
      country
      birthday
      followers
      followed
      isLoggedIn
      boards {
        id
        sharedTimes
        backgroundColor
        backgroundImage
        followers
        averageShowRating
        isFollowed
        showsNumber
        description
        tags
        isOpen
        name
        createdAt
      }
      reviews {
        author
        shortVariant
        content
        likes
        show {
          showId
          title
          posterUrl
          releaseDate
          imdbRating
          genres {
            genreName
          }
        }
      }
    }
    showsRatings {
      id
      show {
        showId
        title
        posterUrl
        releaseDate
        currentUserRating
      }
    }
  }
`;

export const USER_NAME = gql`
  {
    userName {
      id
      firstName
      lastName
    }
  }
`;

export const USERS = gql`
  query users($search: String, $offset: Int, $limit: Int) {
    users(search: $search, offset: $offset, limit: $limit) {
      pages
      data {
        id
        firstName
        lastName
        email
        city
        country
        followers
        followed
        birthday
        isFollowedByCurrentUser
      }
    }
  }
`;

export const FOLLOWERS = gql`
  query followers($userId: Int, $offset: Int, $limit: Int) {
    followers(userId: $userId, offset: $offset, limit: $limit) {
      id
      firstName
      lastName
      email
      city
      country
      followers
      followed
      birthday
      isFollowedByCurrentUser
    }
  }
`;

export const FOLLOWED = gql`
  query followed($userId: Int, $offset: Int, $limit: Int) {
    followed(userId: $userId, offset: $offset, limit: $limit) {
      id
      firstName
      lastName
      email
      city
      country
      followers
      followed
      birthday
      isFollowedByCurrentUser
    }
  }
`;
