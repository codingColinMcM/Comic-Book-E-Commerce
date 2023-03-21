import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      email
      savedComics {
        _id
        name
        title
        publisher
        writer
        artist
        image
        price
        description
        userName
        createdAt
      }
    }
  }
  `;

export const QUERY_SINGLE_PROFILE = gql`
    query profile($profileId: ID!) {
        profile(profileId: $profileId) {
            _id
            name
            savedComics {
        _id
        name
        title
        publisher
        writer
        artist
        image
        price
        description
        userName
        createdAt
            }
        }
    }
`;

export const QUERY_OFFER = gql`
  query allOFFER {
    offer {
      textbody
      userNameID
      messages
      price
    }
  }
`;