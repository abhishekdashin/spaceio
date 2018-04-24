import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WOViewComponent } from './view/view-wo.component';
import { WOManagementComponent } from './workorder-management.component';

const routes: Routes = [{
  path: '',
  component: WOManagementComponent,
  children: [{
    path: 'view',
    component: WOViewComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WOManagementRoutingModule { }
