import { TestBed } from '@angular/core/testing';

import { ModalControlerService } from './modal-controler.service';

describe('ModalControlerService', () => {
  let service: ModalControlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalControlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
