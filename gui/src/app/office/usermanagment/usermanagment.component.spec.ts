import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagmentComponent } from './usermanagment.component';

describe('UsermanagmentComponent', () => {
  let component: UsermanagmentComponent;
  let fixture: ComponentFixture<UsermanagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsermanagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
