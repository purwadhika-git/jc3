import { TestBed, inject } from '@angular/core/testing';

import { MyfirebaseService } from './myfirebase.service';

describe('MyfirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyfirebaseService]
    });
  });

  it('should be created', inject([MyfirebaseService], (service: MyfirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
