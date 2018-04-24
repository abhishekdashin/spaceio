import { TestBed, inject } from '@angular/core/testing';

import { MaintainenceManagementService } from './maintainence-management.service';

describe('MaintainenceManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaintainenceManagementService]
    });
  });

  it('should be created', inject([MaintainenceManagementService], (service: MaintainenceManagementService) => {
    expect(service).toBeTruthy();
  }));
});
