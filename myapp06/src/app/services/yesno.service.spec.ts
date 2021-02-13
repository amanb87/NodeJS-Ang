import { TestBed } from '@angular/core/testing';

import { YesnoService } from './yesno.service';

describe('YesnoService', () => {
  let service: YesnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YesnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("Testing the API", () => {
    it("should check for yes or no", () => {
      const value = service.getString(true);
      expect(value).toMatch("Yes");
    })
  });
});
