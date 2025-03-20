import { TestBed } from '@angular/core/testing';
import { SpecificPrService } from '../../shared/services/specific-pr.service';



describe('SpecificService', () => {
  let service: SpecificPrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecificPrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
