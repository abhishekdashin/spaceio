import { Injectable } from '@angular/core';

@Injectable()
export class MaintainenceManagementService {

   incidents = [{
    assetId: 1,
    floorNo: 2,
    cause: 'Device Not communicating',
    status: 'NEW',
    action: 'Reset Device',
    miscellaneous: 'xyz',
    sla: '2',
  }, {
    assetId: 2,
    floorNo: 2,
    cause: 'Scheduled for maintainence',
    status: 'IN_PROGRESS',
    action: 'Run Maintainence task',
    miscellaneous: 'xyz',
    sla: '8',
  }, {
    assetId: 3,
    floorNo: 6,
    cause: 'Warranty expiring',
    status: 'NEW',
    action: 'Renew Warranty',
    miscellaneous: 'xyz',
    sla: '7',
  }, {
    assetId: 4,
    floorNo: 2,
    cause: 'Warranty expired',
    status: 'PENDING',
    action: 'Renew Warranty',
    miscellaneous: 'xyz',
    sla: '0',
  }];

  getIncidents() {
    return this.incidents;
  }


}
