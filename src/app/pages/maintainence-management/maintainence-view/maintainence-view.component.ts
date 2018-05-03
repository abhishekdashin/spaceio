import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import {MaintainenceManagementService} from '../../../@core/data/maintainence-management/maintainence-management.service';

@Component({
  selector: 'ngx-maintainence-view',
  templateUrl: './maintainence-view.component.html',
  styleUrls: ['./maintainence-view.component.scss'],
})
export class MaintainenceViewComponent {
settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '< class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      assetId: {
        title: 'Asset ID',
        type: 'string',
      },
      cause: {
        title: 'Cause/Incident',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      action: {
        title: 'Action',
        type: 'string',
      },
      miscellaneous: {
        title: 'Miscellaneous',
        type: 'string',
      },
      sla: {
        title: 'SLA',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private maintainenceManagementService: MaintainenceManagementService) {
    const data = this.maintainenceManagementService.getIncidents();
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
