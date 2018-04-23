import { TestBed, inject } from '@angular/core/testing';

import { SpaceManagementViewService } from './space-management-view.service';

describe('SpaceManagementViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceManagementViewService],
    });
  });

  it('should be created', inject([SpaceManagementViewService], (service: SpaceManagementViewService) => {
    expect(service).toBeTruthy();
  }));
});
