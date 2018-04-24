import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';

import { AssetViewService } from '../../@core/data/asset-management/asset-view.service';
import { AssetViewComponent } from './asset-view/asset-view.component';
import { AssetManagementComponent } from './asset-management.component';
import { AssetManagementRoutingModule } from './asset-management-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    AssetManagementRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    AssetManagementComponent, AssetViewComponent,
  ],
  providers: [AssetViewService],
})
export class AssetManagementModule { }
