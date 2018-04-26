import { Component, OnInit } from '@angular/core';
import { WOViewService } from '../../../../@core/data/workorder-management/view-wo.service';
import { WorkOrder } from '../../../../@core/data/models/workorder';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

@Component({
  selector: 'ngx-create-wo',
  templateUrl: './create-wo.component.html',
  styleUrls: ['./create-wo.component.scss'],
})
export class CreateWoComponent implements OnInit {

  private workOrderType: string[];
  private createdBy: string[];
  private assignedTo: string[];
  private status: string[];
  private priority: string[];
  private workOrder: WorkOrder;
  config: ToasterConfig;

  constructor(private woViewService: WOViewService, private toasterService: ToasterService) { }

  ngOnInit() {
     this.workOrderType = ['User_Incident', 'CIP_Incident', 'Scheduled Maintainence', 'Warranty Fix'];
     this.createdBy = ['Abhishek', 'Nishitha'];
     this.assignedTo = ['Nishitha', 'Abhishek'];
     this.status = ['NEW', 'PENDING', 'IN_PROGRESS', 'COMPLETED'];
     this.priority = ['MINOR', 'MAJOR', 'CRITICAL', 'SHOWSTOPPER'];
     this.workOrder = new WorkOrder({
      workOrderId: this.woViewService.workOrders.length + 1,
      workOrderTitle: '',
      workOrderType: this.workOrderType[0],
      createdBy: this.createdBy[0],
      createdDate: '',
      assignedTo: this.assignedTo[0],
      assignedDate: '',
      status: this.status[0],
      priority: this.priority[0],
  });

}

getDate(date: any) {
  return  date['day'] + '/' + date['month'] + '/' + date['year'];
}

  createWorkOrder() {
    this.workOrder.createdDate = this.getDate(this.workOrder.createdDate);
    this.workOrder.assignedDate = this.getDate(this.workOrder.assignedDate);
    this.woViewService.workOrders.push(this.workOrder);
    this.config = new ToasterConfig({
      positionClass: 'toast-top-right',
      timeout: 5000,
      newestOnTop: true,
      tapToDismiss: true,
      preventDuplicates: false,
      animation: 'fade',
      limit: 5,
    });
    const toast: Toast = {
      type: 'success',
      title: null,
      body: 'WorkOrder created successfully',
      timeout: 5000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

}
