import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDetailPageComponent } from './services-detail-page.component';

describe('ServicesDetailPageComponent', () => {
  let component: ServicesDetailPageComponent;
  let fixture: ComponentFixture<ServicesDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
