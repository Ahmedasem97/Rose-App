import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGiftSliderComponent } from './special-gift-slider.component';

describe('SpecialGiftSliderComponent', () => {
  let component: SpecialGiftSliderComponent;
  let fixture: ComponentFixture<SpecialGiftSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialGiftSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
