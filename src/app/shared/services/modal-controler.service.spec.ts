import { TestBed } from '@angular/core/testing';

import { ModalControlerService } from './modal-controler.service';

xdescribe('ModalControlerService', () => {
  let service: ModalControlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalControlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
