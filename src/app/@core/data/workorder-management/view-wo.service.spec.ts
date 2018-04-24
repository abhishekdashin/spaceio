import { TestBed, inject } from '@angular/core/testing';

import { WOViewService } from './view-wo.service';

describe('WOViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WOViewService]
    });
  });

  it('should be created', inject([WOViewService], (service: WOViewService) => {
    expect(service).toBeTruthy();
  }));
});
