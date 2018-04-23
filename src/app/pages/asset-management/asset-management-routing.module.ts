import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetViewComponent } from './asset-view/asset-view.component';
import { AssetManagementComponent } from './asset-management.component';

const routes: Routes = [{
  path: '',
  component: AssetManagementComponent,
  children: [{
    path: 'asset-view',
    component: AssetViewComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetManagementRoutingModule { }
