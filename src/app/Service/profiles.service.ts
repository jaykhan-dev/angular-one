import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { CandidateProfile } from '../Models/profiles.model';
import { ProfilesBlurb } from '../Models/profiles.model';
import {
  GET_CANDIDATE_PROFILES,
  GET_CANDIDATE_PROFILE_BLURB,
  GET_CANDIDATE_BY_SLUG,
} from '../graphql/profiles';

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
