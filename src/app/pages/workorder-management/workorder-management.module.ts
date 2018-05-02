import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { ToasterModule } from 'angular2-toaster';


import { WOViewService } from '../../@core/data/workorder-management/view-wo.service';
import { WOViewComponent } from './view/view-wo.component';
import { WOManagementComponent } from './workorder-management.component';
import { WOManagementRoutingModule } from './workorder-management-routing.module';
import { CreateWoComponent } from './create/create-wo/create-wo.component';
import { EditorTinyMceComponent } from './editor/editor-tiny-mce/editor-tiny-mce.component';

@NgModule({
  imports: [
    ThemeModule,
    WOManagementRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
  ],
  declarations: [
    WOManagementComponent, WOViewComponent, CreateWoComponent, EditorTinyMceComponent,
  ],
  providers: [WOViewService],
})
export class WOManagementModule { }
