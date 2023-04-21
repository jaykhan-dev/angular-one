import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProfilesService } from 'src/app/Service/profiles.service';

@Component({
  selector: 'app-profiles-slug',
  templateUrl: './profiles-slug.component.html',
  styleUrls: ['./profiles-slug.component.css'],
})
export class ProfilesSlugComponent implements OnInit {
  public slug = '';
  public profile: any = {};

  constructor(
    private route: ActivatedRoute,
    private service: ProfilesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.slug = params.get('slug') || '';
    });

    this.service.getProfiles().subscribe((data: any) => {
      const profiles = data.data.allTechStack;
      const profileDetail = profiles.find(
        (profile: { slug: { current: string } }) =>
          profile.slug.current === this.slug
      );
      if (profileDetail) {
        this.profile = profileDetail;
      }
      console.log(profileDetail);
    });
  }
}
