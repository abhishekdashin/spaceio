import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WOViewComponent } from './view/view-wo.component';
import { WOManagementComponent } from './workorder-management.component';
import { CreateWoComponent } from './create/create-wo/create-wo.component';

const routes: Routes = [{
  path: '',
  component: WOManagementComponent,
  children: [{
    path: 'view',
    component: WOViewComponent,
  }, {
    path: 'create',
    component: CreateWoComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WOManagementRoutingModule { }
