import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLPromotionComponent } from './p-l-promotion.component';

describe('PLPromotionComponent', () => {
  let component: PLPromotionComponent;
  let fixture: ComponentFixture<PLPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PLPromotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PLPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
