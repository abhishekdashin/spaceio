import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintainenceManagementComponent } from './maintainence-management.component';
import { MaintainenceViewComponent } from './maintainence-view/maintainence-view.component';

const routes: Routes = [{
  path: '',
  component: MaintainenceManagementComponent,
  children: [{
    path: 'maintainence-view',
    component: MaintainenceViewComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintainenceManagementRoutingModule { }
