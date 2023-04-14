import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

export interface HomeBlurb {
  title: string;
  summary: string;
}

export const HOME_HERO_BLURB = gql`
  query HOME_HERO_BLURB {
    allBlurbs(where: { _id: { eq: "81433456-c971-4a2e-bb73-e807530a9a6c" } }) {
      _id
      title
      summary
      subHeading
      button
    }
  }
`;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeBlurb: HomeBlurb[] = [];
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: HOME_HERO_BLURB,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.homeBlurb = data.allBlurbs;
        this.error = error;
      });
  }
}
