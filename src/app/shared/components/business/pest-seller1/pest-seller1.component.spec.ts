import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestSeller1Component } from './pest-seller1.component';

describe('PestSeller1Component', () => {
  let component: PestSeller1Component;
  let fixture: ComponentFixture<PestSeller1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PestSeller1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PestSeller1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
