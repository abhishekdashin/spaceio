import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';


import { SpaceManagementRoutingModule } from './space-management-routing.module';
import { SpaceManagementViewService } from '../../@core/data/space-management/space-management-view.service';
import { SiteViewService } from '../../@core/data/space-management/site-view.service';

import { SpaceManagementComponent } from './space-management.component';
import { SpaceManagementViewComponent } from './space-management-view/space-management-view.component';
import { SiteViewComponent } from './site-view/site-view.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { RoomSelectorComponent } from './site-map/room-selector/room-selector.component';
import { PlayerComponent } from './site-map/player/player.component';
import { SiteMapDashboardComponent } from './site-map.dashboard/site-map.dashboard.component';
import { StatusCardComponent } from './site-map.dashboard/status-card/status-card.component';


@NgModule({
  imports: [
    ThemeModule,
    SpaceManagementRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    SpaceManagementComponent, SpaceManagementViewComponent
    , SiteViewComponent, SiteMapComponent, RoomSelectorComponent, PlayerComponent,SiteMapDashboardComponent,StatusCardComponent
  ],
  providers: [SpaceManagementViewService, SiteViewService],
})
export class SpaceManagementModule { }
