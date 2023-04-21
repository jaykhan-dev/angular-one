import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProfilesService } from 'src/app/Service/profiles.service';

@Component({
  selector: 'app-profiles-slug',
  templateUrl: './profiles-slug.component.html',
  styleUrls: ['./profiles-slug.component.css'],
})
export class ProfilesSlugComponent implements OnInit {
  public profileId = '';
  public profile: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: ProfilesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.profileId = params.get('id') || '';
    });

    this.service.getProfiles().subscribe((data: any) => {
      const profiles = data.data.allTechStack;
      const profileDetail = profiles.find(
        (profile: { _id: string }) => profile._id === this.profileId
      );
      if (profileDetail) {
        this.profile = profileDetail;
      }
    });
  }
}
