import { TestBed, inject } from '@angular/core/testing';

import { DestructuringService } from './destructuring.service';

describe('DestructuringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DestructuringService]
    });
  });

  it('should be created', inject([DestructuringService], (service: DestructuringService) => {
    expect(service).toBeTruthy();
  }));
});
