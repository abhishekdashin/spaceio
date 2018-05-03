import { Injectable } from '@angular/core';

@Injectable()
export class MaintainenceManagementService {

   incidents = [{
    assetId: 'Camera1_MAR_F1',
    cause: 'Device Not functioning',
    status: 'NEW',
    action: 'Repair Device',
    miscellaneous: 'Device stopped functioning at 2018-05-02T09:10:33.000Z',
    sla: '12',
  }, {
    assetId: 'AC1_MAR_F1',
    cause: 'Scheduled for maintainence',
    status: 'IN_PROGRESS',
    action: 'Run Maintainence task',
    miscellaneous: 'Maintainence scheduled at 2018-05-10T09:10:33.000Z',
    sla: '1',
  }, {
    assetId: 'CoffeeMaker1_MAR_F1',
    cause: 'Warranty expiring',
    status: 'NEW',
    action: 'Renew Warranty',
    miscellaneous: 'Warrant expiry date 2018-06-17T09:10:33.000Z',
    sla: '5',
  }, {
    assetId: 'Blinds1_MAR_F1',
    cause: 'Blinds not functioning',
    status: 'PENDING',
    action: 'Fix the blinds',
    miscellaneous: 'Blinds issue raised by User1',
    sla: '0',
  }];

  getIncidents() {
    return this.incidents;
  }


}
