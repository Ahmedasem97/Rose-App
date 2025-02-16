import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSliderComponent } from './details-slider.component';

describe('DetailsSliderComponent', () => {
  let component: DetailsSliderComponent;
  let fixture: ComponentFixture<DetailsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
