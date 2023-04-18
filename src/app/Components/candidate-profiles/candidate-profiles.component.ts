import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

interface Profiles {
  title: string;
  summary: string;
  slug: {
    current: string;
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

@Component({
  selector: 'app-candidate-profiles',
  templateUrl: './candidate-profiles.component.html',
  styleUrls: ['./candidate-profiles.component.scss'],
})
export class CandidateProfilesComponent implements OnInit {
  profiles: Profiles[] = [];
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: GET_CANDIDATE_PROFILES,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.profiles = data.allTechStack;
        this.error = error;
      });
  }
}
