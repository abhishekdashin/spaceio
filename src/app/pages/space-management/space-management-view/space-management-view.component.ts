import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SpaceManagementViewService } from '../../../@core/data/space-management/space-management-view.service';

@Component({
  selector: 'ngx-space-management-view',
  templateUrl: './space-management-view.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SpaceManagementViewComponent {

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
      spaceId: {
        title: 'Space ID',
        type: 'number',
      },
      spaceName: {
        title: 'Space Name',
        type: 'string',
      },
      spaceType: {
        title: 'Space Type',
        type: 'string',
      },
      siteCode: {
        title: 'Site Code',
        type: 'string',
      },
      floorNo: {
        title: 'Floor No',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private spaceManagementViewService: SpaceManagementViewService) {
    const data = this.spaceManagementViewService.getSpaces();
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
