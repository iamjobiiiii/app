import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcreationComponent } from './parentcreation.component';

describe('ParentcreationComponent', () => {
  let component: ParentcreationComponent;
  let fixture: ComponentFixture<ParentcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentcreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
