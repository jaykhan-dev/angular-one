import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recuiting',
  templateUrl: './recruiting.component.html',
  styleUrls: ['./recruiting.component.scss'],
})
export class RecuitingComponent {
  constructor(private route: ActivatedRoute) {}
}
