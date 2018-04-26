export class WorkOrder {
      workOrderId: number;
      workOrderTitle: string;
      workOrderType: string;
      createdBy: string;
      createdDate: string;
      assignedTo: string;
      assignedDate: string;
      status: string;
      priority: string;
      constructor(values: Object = {}) {
            Object.assign(this, values);
      }
}
