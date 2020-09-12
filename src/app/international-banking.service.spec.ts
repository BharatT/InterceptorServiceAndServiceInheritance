import { TestBed } from '@angular/core/testing';

import { InternationalBankingService } from './international-banking.service';

describe('InternationalBankingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternationalBankingService = TestBed.get(InternationalBankingService);
    expect(service).toBeTruthy();
  });
});
