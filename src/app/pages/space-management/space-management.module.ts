import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';


import { SpaceManagementRoutingModule, routedComponents } from './space-management-routing.module';
import { SpaceManagementViewService } from '../../@core/data/space-management/space-management-view.service';


@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    SpaceManagementRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [SpaceManagementViewService],
})
export class SpaceManagementModule { }
