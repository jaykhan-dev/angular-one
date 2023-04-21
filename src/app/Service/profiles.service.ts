import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { CandidateProfile } from '../Models/profiles.model';
import { ProfilesBlurb } from '../Models/profiles.model';

const GET_CANDIDATE_PROFILES = gql`
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

const GET_CANDIDATE_PROFILE_BLURB = gql`
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

@Injectable({
  providedIn: 'root',
})
export class ProfilesService {
  constructor(private apollo: Apollo) {}

  getProfiles(): Observable<unknown> {
    return this.apollo.watchQuery<CandidateProfile>({
      query: GET_CANDIDATE_PROFILES,
    }).valueChanges;
  }

  getProfilesBlurb(): Observable<unknown> {
    return this.apollo.watchQuery<ProfilesBlurb>({
      query: GET_CANDIDATE_PROFILE_BLURB,
    }).valueChanges;
  }
}
