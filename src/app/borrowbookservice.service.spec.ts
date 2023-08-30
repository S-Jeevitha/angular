import { TestBed } from '@angular/core/testing';

import { BorrowbookserviceService } from './borrowbookservice.service';

describe('BorrowbookserviceService', () => {
  let service: BorrowbookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowbookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
