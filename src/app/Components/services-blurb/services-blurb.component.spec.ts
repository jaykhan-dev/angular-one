import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBlurbComponent } from './services-blurb.component';

describe('ServicesBlurbComponent', () => {
  let component: ServicesBlurbComponent;
  let fixture: ComponentFixture<ServicesBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesBlurbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
