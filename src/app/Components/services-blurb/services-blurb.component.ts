import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Blurb } from 'src/app/Models/blurb.model';

const GET_SERVICES_BLURB = gql`
  query ServicesBlurb {
    allBlurbs(where: { _id: { eq: "fecbdcf4-6ff2-40fc-928a-9775febff23d" } }) {
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
  selector: 'app-services-blurb',
  templateUrl: './services-blurb.component.html',
  styleUrls: ['./services-blurb.component.scss'],
})
export class ServicesBlurbComponent implements OnInit {
  servicesBlurb: Blurb[] = [];
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_SERVICES_BLURB,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.servicesBlurb = data.allBlurbs;
        this.error = error;
      });
  }
}
