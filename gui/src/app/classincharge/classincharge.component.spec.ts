import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassinchargeComponent } from './classincharge.component';

describe('ClassinchargeComponent', () => {
  let component: ClassinchargeComponent;
  let fixture: ComponentFixture<ClassinchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassinchargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassinchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
