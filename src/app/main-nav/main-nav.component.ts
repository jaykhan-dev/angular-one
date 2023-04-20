import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

interface Links {
  index: number;
  name: string;
  path: string;
}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  links: Links[] = [
    { index: 1, name: 'Home', path: '/' },
    { index: 2, name: 'About', path: '/about' },
    { index: 3, name: 'Services', path: '/services' },
    { index: 4, name: 'Team', path: '/team' },
    { index: 5, name: 'Contact', path: '/contact' },
    { index: 6, name: 'Recruiting', path: '/recruiting' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
