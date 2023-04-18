import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

interface Service {
  _id: string;
  name: string;
  summary: string;
  slug: {
    current: string;
  };
  contentRaw: any;
}

export const GET_SERVICE_BY_SLUG = gql`
  query SERVICES_BY_SLUG($slug: String!) {
    allServices(where: { slug: { current: { eq: $slug } } }) {
      _id
      slug {
        current
      }
      name
      summary
      contentRaw
    }
  }
`;

@Component({
  selector: 'app-services-detail-page',
  templateUrl: './services-detail-page.component.html',
  styleUrls: ['./services-detail-page.component.scss'],
})
export class ServicesDetailPageComponent implements OnInit {
  slug: string | null = null;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }
}
