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
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      siteId: {
        title: 'WO ID',
        type: 'number',
      },
      siteName: {
        title: 'WO Type',
        type: 'string',
      },
      siteCode: {
        title: 'Status',
        type: 'string',
      },
      city: {
        title: 'Created By',
        type: 'string',
      },
      state: {
        title: 'Created Date',
        type: 'string',
      },
      country: {
        title: 'Country',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private woViewService: WOViewService) {
    const data = this.woViewService.getWO();
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
