import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSectionTitleComponent } from './payment-section-title.component';

describe('PaymentSectionTitleComponent', () => {
  let component: PaymentSectionTitleComponent;
  let fixture: ComponentFixture<PaymentSectionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentSectionTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
