import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

interface Services {
  id: string;
  name: string;
  summary: string;
  thumbnail: {
    asset: {
      url: string;
    };
  };
}

const GET_SERVICES = gql`
  query Services {
    allServices {
      _id
      name
      summary
      thumbnail {
        asset {
          url
        }
      }
    }
  }
`;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: Services[] = [];
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_SERVICES,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        this.services = data.allServices;
        this.error = error;
      });
  }
}
