import { gql } from 'apollo-angular';

const GET_SERVICES = gql`
  query SERVICES {
    allServices {
      name
      summary
      slug {
        current
      }
      thumbnail {
        asset {
          url
        }
      }
    }
  }
`;

export { GET_SERVICES };
