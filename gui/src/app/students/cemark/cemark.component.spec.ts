import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CemarkComponent } from './cemark.component';

describe('CemarkComponent', () => {
  let component: CemarkComponent;
  let fixture: ComponentFixture<CemarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CemarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
