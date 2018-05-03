import { Injectable } from '@angular/core';

@Injectable()
export class WOViewService {

    workOrders = [ {
    workOrderId: 1,
    workOrderTitle: 'Repair Device',
    workOrderType: 'CIP_Incident',
    assetId: 'Camera1_MAR_F1',
    createdBy: 'Abhishek',
    createdDate: '25/04/2018',
    assignedTo: 'Nishitha',
    assignedDate: '27/04/2018',
    status: 'PENDING',
    priority: 'MAJOR',
  }, {
    workOrderId: 2,
    workOrderTitle: 'Run Maintainence task',
    workOrderType: 'Scheduled Maintainence',
    assetId: 'AC1_MAR_F1',
    createdBy: 'Abhishek',
    createdDate: '25/04/2018',
    assignedTo: 'Nishitha',
    assignedDate: '30/04/2018',
    status: 'PENDING',
    priority: 'CRITICAL',
  }, {
    workOrderId: 3,
    workOrderTitle: 'Renew Warranty',
    workOrderType: 'Warranty Fix',
    assetId: 'CoffeeMaker1_MAR_F1',
    createdBy: 'Abhishek',
    createdDate: '25/04/2018',
    assignedTo: 'Nishitha',
    assignedDate: '25/04/2018',
    status: 'IN_PROGRESS',
    priority: 'MAJOR',
  }, {
    workOrderId: 4,
    workOrderTitle: 'Fix the blinds',
    workOrderType: 'User_Incident',
    assetId: 'Blinds1_MAR_F1',
    createdBy: 'Abhishek',
    createdDate: '25/04/2018',
    assignedTo: 'Santhi',
    assignedDate: '26/04/2018',
    status: 'IN_PROGRESS',
    priority: 'MAJOR',
  }];

  getWorkOrders() {
    return this.workOrders;
  }

}
