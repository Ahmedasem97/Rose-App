import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGiftBannerComponent } from './special-gift-banner.component';

describe('SpecialGiftBannerComponent', () => {
  let component: SpecialGiftBannerComponent;
  let fixture: ComponentFixture<SpecialGiftBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialGiftBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
