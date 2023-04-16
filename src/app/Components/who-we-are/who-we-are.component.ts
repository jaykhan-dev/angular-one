import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Blurb } from '../../Models/blurb.model';

const GET_WHO_WE_ARE = gql`
  query WhoWeAre {
    allBlurbs(where: { _id: { eq: "e94e0239-85b1-477f-b0e6-56120eca62f2" } }) {
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

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss'],
})
export class WhoWeAreComponent implements OnInit {
  whoWeAre: Blurb[] = [];
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_WHO_WE_ARE,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.whoWeAre = data.allBlurbs;
        this.error = error;
      });
  }
}
