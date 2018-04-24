import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { AssetViewService } from '../../../@core/data/asset-management/asset-view.service';


@Component({
  selector: 'ngx-asset-view',
  templateUrl: './asset-view.component.html',
  styleUrls: ['./asset-view.component.scss'],
})
export class AssetViewComponent {
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

  constructor(private assetViewService: AssetViewService) {
    const data = this.assetViewService.getAssets();
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
