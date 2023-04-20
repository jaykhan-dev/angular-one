import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-detailed',
  templateUrl: './services-detailed.component.html',
  styleUrls: ['./services-detailed.component.css'],
})
export class ServicesDetailedComponent {
  constructor(public router: ActivatedRoute) {}
}
