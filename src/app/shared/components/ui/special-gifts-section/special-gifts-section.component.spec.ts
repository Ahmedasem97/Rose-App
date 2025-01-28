import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialGiftsSectionComponent } from './special-gifts-section.component';

describe('SpecialGiftsSectionComponent', () => {
  let component: SpecialGiftsSectionComponent;
  let fixture: ComponentFixture<SpecialGiftsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialGiftsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
