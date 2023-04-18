import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesBlurbComponent } from './profiles-blurb.component';

describe('ProfilesBlurbComponent', () => {
  let component: ProfilesBlurbComponent;
  let fixture: ComponentFixture<ProfilesBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesBlurbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
