import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

export interface Client {
  name: string;
  thumbnail: {
    asset: {
      url: string;
    };
  };
}

export const GET_CLIENTS = gql`
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
  }
}
