import { TestBed, inject } from '@angular/core/testing';

import { AssetViewService } from './asset-view.service';

describe('AssetViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssetViewService]
    });
  });

  it('should be created', inject([AssetViewService], (service: AssetViewService) => {
    expect(service).toBeTruthy();
  }));
});
