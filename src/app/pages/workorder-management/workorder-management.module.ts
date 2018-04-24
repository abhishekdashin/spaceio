import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';

import { WOViewService } from '../../@core/data/workorder-management/view-wo.service';
import { WOViewComponent } from './view/view-wo.component';
import { WOManagementComponent } from './workorder-management.component';
import { WOManagementRoutingModule } from './workorder-management-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    WOManagementRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    WOManagementComponent, WOViewComponent,
  ],
  providers: [WOViewService],
})
export class WOManagementModule { }
