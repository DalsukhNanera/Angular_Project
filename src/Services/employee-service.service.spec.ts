import { TestBed } from '@angular/core/testing';

import { EMployeeServiceService } from './employee-service.service';

describe('EMployeeServiceService', () => {
  let service: EMployeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMployeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
