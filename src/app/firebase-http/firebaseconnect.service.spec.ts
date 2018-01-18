import { TestBed, inject } from '@angular/core/testing';

import { FirebaseconnectService } from './firebaseconnect.service';

describe('FirebaseconnectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseconnectService]
    });
  });

  it('should be created', inject([FirebaseconnectService], (service: FirebaseconnectService) => {
    expect(service).toBeTruthy();
  }));
});
