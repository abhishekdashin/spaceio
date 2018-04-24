import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SiteViewService } from '../../../@core/data/space-management/site-view.service';


@Component({
  selector: 'ngx-site-view',
  templateUrl: './site-view.component.html',
  styleUrls: ['./site-view.component.scss'],
})
export class SiteViewComponent {
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
        title: 'Site ID',
        type: 'number',
      },
      siteName: {
        title: 'Site Name',
        type: 'string',
      },
      siteCode: {
        title: 'Site Code',
        type: 'string',
      },
      city: {
        title: 'City',
        type: 'string',
      },
      state: {
        title: 'State',
        type: 'string',
      },
      country: {
        title: 'Country',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private siteViewService: SiteViewService) {
    const data = this.siteViewService.getSites();
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
