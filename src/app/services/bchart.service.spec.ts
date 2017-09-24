import { TestBed, inject } from '@angular/core/testing';

import { BchartService } from './bchart.service';

describe('BchartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BchartService]
    });
  });

  it('should be created', inject([BchartService], (service: BchartService) => {
    expect(service).toBeTruthy();
  }));
});
