import { TestBed, inject } from '@angular/core/testing';

import { SiteViewService } from './site-view.service';

describe('SiteViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteViewService]
    });
  });

  it('should be created', inject([SiteViewService], (service: SiteViewService) => {
    expect(service).toBeTruthy();
  }));
});
