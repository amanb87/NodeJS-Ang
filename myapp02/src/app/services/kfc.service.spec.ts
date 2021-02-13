import { TestBed } from '@angular/core/testing';

import { KfcService } from './kfc.service';

describe('KfcService', () => {
  let service: KfcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KfcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
