import { TestBed, inject } from '@angular/core/testing';

import { TextrazorService } from './textrazor.service';

describe('TextrazorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextrazorService]
    });
  });

  it('should be created', inject([TextrazorService], (service: TextrazorService) => {
    expect(service).toBeTruthy();
  }));
});
