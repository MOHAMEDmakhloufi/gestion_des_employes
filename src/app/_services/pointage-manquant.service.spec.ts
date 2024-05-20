import { TestBed } from '@angular/core/testing';

import { PointageManquantService } from './pointage-manquant.service';

describe('PointageManquantService', () => {
  let service: PointageManquantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointageManquantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
