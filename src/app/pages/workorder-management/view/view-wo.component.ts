import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { WOViewService } from '../../../@core/data/workorder-management/view-wo.service';


@Component({
  selector: 'ngx-wo-view',
  templateUrl: './view-wo.component.html',
  styleUrls: ['./view-wo.component.scss'],
})
export class WOViewComponent {
settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    view: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      workOrderId: {
        title: 'WO ID',
        type: 'number',
      },
      workOrderTitle: {
        title: 'Title',
        type: 'string',
      },
      workOrderType: {
        title: 'WO Type',
        type: 'string',
      },
       assetId: {
        title: 'Asset ID',
        type: 'string',
      },
      createdBy: {
        title: 'Created By',
        type: 'string',
      },
      createdDate: {
        title: 'Created Date',
        type: 'string',
      },
      assignedTo: {
        title: 'Assigned To',
        type: 'string',
      },
      assignedDate: {
        title: 'Assigned Date',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      priority: {
        title: 'Priority',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private woViewService: WOViewService) {
    const data = this.woViewService.getWorkOrders();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
