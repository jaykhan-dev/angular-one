import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuitingComponent } from './recuiting.component';

describe('RecuitingComponent', () => {
  let component: RecuitingComponent;
  let fixture: ComponentFixture<RecuitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuitingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
