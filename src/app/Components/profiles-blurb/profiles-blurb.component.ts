import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Blurb } from 'src/app/Models/blurb.model';

// a7abd7e0-fcc8-4ae8-9e5f-510866f234ac

const GET_PROFILES_BLURB = gql`
  query BLURBS {
    allBlurbs(where: { _id: { eq: "a7abd7e0-fcc8-4ae8-9e5f-510866f234ac" } }) {
      title
      _id
      summary
      image {
        asset {
          url
        }
      }
    }
  }
`;

@Component({
  selector: 'app-profiles-blurb',
  templateUrl: './profiles-blurb.component.html',
  styleUrls: ['./profiles-blurb.component.scss'],
})
export class ProfilesBlurbComponent implements OnInit {
  profilesBlurb: Blurb[] = [];
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_PROFILES_BLURB,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.profilesBlurb = data.allBlurbs;
        this.error = error;
      });
  }
}
