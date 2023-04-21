import { gql } from 'apollo-angular';

export const GET_CANDIDATE_PROFILES = gql`
  query CandidateProfiles {
    allTechStack {
      _id
      title
      slug {
        current
      }
      summary
    }
  }
`;

export const GET_CANDIDATE_PROFILE_BLURB = gql`
  query CandidateProfileBlurb {
    allBlurbs(where: { _id: { eq: "a7abd7e0-fcc8-4ae8-9e5f-510866f234ac" } }) {
      _id
      title
      summary
      image {
        asset {
          url
        }
      }
    }
  }
`;

export const GET_CANDIDATE_BY_SLUG = gql`
  query CandidateProfileBySlug($slug: String!) {
    allTechStack(where: { slug: { current: { eq: $slug } } }) {
      _id
      title
      slug {
        current
      }
      summary
    }
  }
`;
