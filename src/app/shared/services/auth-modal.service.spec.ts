import { TestBed } from '@angular/core/testing';

import { AuthModalService } from './auth-modal.service';

xdescribe('AuthModalService', () => {
  let service: AuthModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
