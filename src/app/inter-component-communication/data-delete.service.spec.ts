import { TestBed, inject } from '@angular/core/testing';

import { DataDeleteService } from './data-delete.service';

describe('DataDeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataDeleteService]
    });
  });

  it('should be created', inject([DataDeleteService], (service: DataDeleteService) => {
    expect(service).toBeTruthy();
  }));
});
