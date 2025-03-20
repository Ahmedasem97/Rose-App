import { TestBed } from '@angular/core/testing';
import { CartAdapter } from './cart-adapter';


describe('CartAdapterService', () => {
  let service: CartAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartAdapter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
