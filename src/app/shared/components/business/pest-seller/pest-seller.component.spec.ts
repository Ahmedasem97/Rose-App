import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestSellerComponent } from './pest-seller.component';

describe('PestSellerComponent', () => {
  let component: PestSellerComponent;
  let fixture: ComponentFixture<PestSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PestSellerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PestSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
