import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CemarkmanagementComponent } from './cemarkmanagement.component';

describe('CemarkmanagementComponent', () => {
  let component: CemarkmanagementComponent;
  let fixture: ComponentFixture<CemarkmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CemarkmanagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CemarkmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
