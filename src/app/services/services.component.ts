import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_SERVICES } from '../graphql.operations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: any[] = [];
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
