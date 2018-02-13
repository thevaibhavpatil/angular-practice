import { TestBed, inject } from '@angular/core/testing';

import { HttpAccessService } from './http-access.service';

describe('HttpAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpAccessService]
    });
  });

  it('should be created', inject([HttpAccessService], (service: HttpAccessService) => {
    expect(service).toBeTruthy();
  }));
});
