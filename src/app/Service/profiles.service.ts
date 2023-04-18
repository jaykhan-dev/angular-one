import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';

export interface CandidateProfile {
  data: {
    allTechStack: {
      title: string;
      slug: {
        current: string;
      };
      summary: string;
    };
  };
}

const GET_CANDIDATE_PROFILES = gql`
  query CandidateProfiles {
    allTechStack {
      title
      slug {
        current
      }
      summary
    }
  }
`;

export interface CandidateProfileBlurb {
  _id: string;
  title: string;
  summary: string;
}

const GET_CANDIDATE_PROFILE_BLURB = gql`
  query CandidateProfileBlurb {
    allBlurbs(where: { _id: { eq: "8d055060-b180-4100-885e-dcb951360e2c" } }) {
      _id
      title
      summary
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  constructor(private apollo: Apollo) {}

  getProfiles(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_CANDIDATE_PROFILES,
    }).valueChanges;
  }
}
