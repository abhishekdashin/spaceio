import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';


import {MaintainenceManagementService } from '../../@core/data/maintainence-management/maintainence-management.service';
import { MaintainenceManagementComponent } from './maintainence-management.component';
import { MaintainenceViewComponent } from './maintainence-view/maintainence-view.component';
import { MaintainenceManagementRoutingModule } from './maintainence-management-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    MaintainenceManagementRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    MaintainenceManagementComponent, MaintainenceViewComponent,
  ],
  providers: [MaintainenceManagementService],
})
export class MaintainenceManagementModule { }
