import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceManagementComponent } from './space-management.component';
import { SpaceManagementViewComponent } from './space-management-view/space-management-view.component'

const routes: Routes = [{
   path: '',
  component: SpaceManagementComponent,
  children: [{
    path: 'space-management-view',
    component: SpaceManagementViewComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceManagementRoutingModule { }

export const routedComponents = [
  SpaceManagementComponent,
  SpaceManagementViewComponent,
];
