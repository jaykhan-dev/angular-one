import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Blurb } from 'src/app/Models/blurb.model';
import { ProfilesService } from 'src/app/Service/profiles.service';
import { ProfilesBlurb } from 'src/app/Models/profiles.model';

@Component({
  selector: 'app-profiles-blurb',
  templateUrl: './profiles-blurb.component.html',
  styleUrls: ['./profiles-blurb.component.scss'],
})
export class ProfilesBlurbComponent implements OnInit {
  profilesBlurb: ProfilesBlurb[] = [];
  error: unknown;

  constructor(private profilesService: ProfilesService) {}

  ngOnInit(): void {
    this.getProfilesBlurb();
  }

  getProfilesBlurb() {
    this.profilesService.getProfilesBlurb().subscribe((data: any) => {
      this.profilesBlurb = data.data.allBlurbs;
      this.error = data.errors;
    });
  }
}
