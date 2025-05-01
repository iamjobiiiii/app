import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalmarkComponent } from './internalmark.component';

describe('InternalmarkComponent', () => {
  let component: InternalmarkComponent;
  let fixture: ComponentFixture<InternalmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalmarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
