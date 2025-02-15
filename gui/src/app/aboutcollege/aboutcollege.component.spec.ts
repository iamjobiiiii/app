import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcollegeComponent } from './aboutcollege.component';

describe('AboutcollegeComponent', () => {
  let component: AboutcollegeComponent;
  let fixture: ComponentFixture<AboutcollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutcollegeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutcollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
