import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InernalmarkmanagemantComponent } from './inernalmarkmanagemant.component';

describe('InernalmarkmanagemantComponent', () => {
  let component: InernalmarkmanagemantComponent;
  let fixture: ComponentFixture<InernalmarkmanagemantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InernalmarkmanagemantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InernalmarkmanagemantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
