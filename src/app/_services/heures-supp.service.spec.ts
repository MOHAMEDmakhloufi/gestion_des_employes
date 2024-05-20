import { TestBed } from '@angular/core/testing';

import { HeuresSuppService } from './heures-supp.service';

describe('HeuresSuppService', () => {
  let service: HeuresSuppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeuresSuppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
