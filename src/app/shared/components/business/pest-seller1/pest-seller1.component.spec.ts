import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSeller1Component } from './pest-seller1.component';

describe('PestSeller1Component', () => {
  let component: BestSeller1Component;
  let fixture: ComponentFixture<BestSeller1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSeller1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSeller1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
