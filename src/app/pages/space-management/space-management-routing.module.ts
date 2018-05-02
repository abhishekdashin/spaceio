import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceManagementComponent } from './space-management.component';
import { SpaceManagementViewComponent } from './space-management-view/space-management-view.component';
import { SiteViewComponent } from './site-view/site-view.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { SiteMapDashboardComponent } from './site-map.dashboard/site-map.dashboard.component';


const routes: Routes = [{
  path: '',
  component: SpaceManagementComponent,
  children: [{
    path: 'site-view',
    component: SiteViewComponent,
  }, {
    path: 'site-map',
    component: SiteMapComponent,
  },{
    path: 'site-map-dashboard',
    component: SiteMapDashboardComponent,
  } ,{
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
  SiteViewComponent,
];
