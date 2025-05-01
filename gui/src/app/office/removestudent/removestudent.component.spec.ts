import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovestudentComponent } from './removestudent.component';

describe('RemovestudentComponent', () => {
  let component: RemovestudentComponent;
  let fixture: ComponentFixture<RemovestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemovestudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
