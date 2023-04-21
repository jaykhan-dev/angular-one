import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/Service/profiles.service';
import { CandidateProfile } from 'src/app/Models/profiles.model';

@Component({
  selector: 'app-candidate-profiles',
  templateUrl: './candidate-profiles.component.html',
  styleUrls: ['./candidate-profiles.component.scss'],
})
export class CandidateProfilesComponent implements OnInit {
  profiles: CandidateProfile[] = [];
  error: unknown;
  loading: boolean | undefined;

  constructor(private profilesService: ProfilesService) {}

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles() {
    this.profilesService.getProfiles().subscribe((data: any) => {
      this.profiles = data.data.allTechStack;
      this.error = data.errors;
    });
  }
}
