import { Injectable } from '@angular/core';

@Injectable()
export class WOViewService {

    workOrders = [ {
    workOrderId: 1,
    woType: 'Type 1',
    status: 'PENDING',
    createdBy: 'Abhishek',
    assignedTo: 'Nishitha',
    priority: 'MAJOR',
  }, {
    workOrderId: 2,
    woType: 'Type 2',
    status: 'PENDING',
    createdBy: 'Abhishek',
    assignedTo: 'Nishitha',
    priority: 'CRITICAL',
  }, {
    workOrderId: 3,
    woType: 'Type 1',
    status: 'IN_PROGRESS',
    createdBy: 'Abhishek',
    assignedTo: 'Nishitha',
    priority: 'MAJOR',
  }, {
    workOrderId: 4,
    woType: 'Type 2',
    status: 'IN_PROGRESS',
    createdBy: 'Abhishek',
    assignedTo: 'Nishitha',
    priority: 'MAJOR',
  }, {
    workOrderId: 5,
    woType: 'Type 2',
    status: 'COMPLETED',
    createdBy: 'Abhishek',
    assignedTo: 'Nishitha',
    priority: 'MAJOR',
  }, {
    workOrderId: 6,
    woType: 'Type 2',
    status: 'COMPLETED',
    createdBy: 'Abhishek',
    assignedTo: 'Nishitha',
    priority: 'MINOR',
  }, {
    workOrderId: 7,
    woType: 'Type 1',
    status: 'IN_PROGRESS',
    createdBy: 'Abhishek',
    assignedTo: 'Nishitha',
    priority: 'MINOR',
  }, {
    workOrderId: 8,
    woType: 'Type 3',
    status: 'IN_PROGRESS',
    createdBy: 'Abhishek',
    assignedTo: 'Nishitha',
    priority: 'MINOR',
  }, {
    workOrderId: 9,
    woType: 'Type 1',
    status: 'PENDING',
    createdBy: 'Abhishek',
    assignedTo: 'Nishitha',
    priority: 'SHOWSTOPPER',
  }, {
    workOrderId: 10,
    woType: 'Type 4',
    status: 'COMPLETED',
    createdBy: 'Abhishek',
    assignedTo: 'Nishitha',
    priority: 'SHOWSTOPPER',
  }, {
    workOrderId: 11,
    woType: 'Type 1',
    status: 'COMPLETED',
    createdBy: 'Abhishek',
    assignedTo: 'Nishitha',
    priority: 'MINOR',
  }];

  getWorkOrders() {
    return this.workOrders;
  }

}
