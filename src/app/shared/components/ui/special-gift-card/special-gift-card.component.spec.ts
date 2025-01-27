import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGiftCardComponent } from './special-gift-card.component';

describe('SpecialGiftCardComponent', () => {
  let component: SpecialGiftCardComponent;
  let fixture: ComponentFixture<SpecialGiftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
