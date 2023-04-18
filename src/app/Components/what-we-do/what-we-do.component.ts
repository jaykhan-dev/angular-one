import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Blurb } from 'src/app/Models/blurb.model';

interface BlurbSpecial {
  _id: string;
  title: string;
  summary: string;
  image: {
    asset: {
      url: string;
    };
  };
  subHeading: string;
  button: string;
}

const GET_WHAT_WE_DO = gql`
  query WhatWeDo {
    allBlurbs(where: { _id: { eq: "03a68490-ef6a-4b3d-a787-09aecf7e7c6f" } }) {
      _id
      title
      summary
      image {
        asset {
          url
        }
      }
      subHeading
      button
    }
  }
`;

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
})
export class WhatWeDoComponent implements OnInit {
  whatWeDo: BlurbSpecial[] = [];
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_WHAT_WE_DO,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.whatWeDo = data.allBlurbs;
        this.error = error;
      });
  }
}
