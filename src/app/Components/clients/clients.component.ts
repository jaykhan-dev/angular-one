import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

// 8d055060-b180-4100-885e-dcb951360e2c

interface Client {
  name: string;
  thumbnail: {
    asset: {
      url: string;
    };
  };
}

interface ClientBlurb {
  _id: string;
  title: string;
  summary: string;
  image: {
    asset: {
      url: string;
    };
  };
}

const GET_CLIENT_BLURB = gql`
  query ClientBlurb {
    allBlurbs(where: { _id: { eq: "8d055060-b180-4100-885e-dcb951360e2c" } }) {
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

const GET_CLIENTS = gql`
  query Clients {
    allClients {
      name
      thumbnail {
        asset {
          url
        }
      }
    }
  }
`;

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  clientsBlurb: ClientBlurb[] = [];
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: GET_CLIENTS,
      })
      .valueChanges.subscribe((result) => {
        this.clients = result.data.allClients;
      });

    this.apollo
      .watchQuery<any>({
        query: GET_CLIENT_BLURB,
      })
      .valueChanges.subscribe((result) => {
        this.clientsBlurb = result.data.allBlurbs;
      });
  }
}
