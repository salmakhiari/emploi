import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastModule} from 'primeng/toast';
import {FormsModule} from '@angular/forms';
import {
  ButtonModule,
  ConfirmDialogModule,
  DialogModule,
  InputSwitchModule,
  InputTextModule,
  KeyFilterModule, PanelModule,
  SliderModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import { NgxPermissionsModule } from 'ngx-permissions';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPermissionsModule.forChild()
  ],
  exports : [ToastModule,
    TableModule,
    ButtonModule,
    InputSwitchModule,
    ConfirmDialogModule,
    FormsModule,
    KeyFilterModule,
    DialogModule,
    InputTextModule,
    NgxPermissionsModule,
    SliderModule,
    NgbModule,
    DataViewModule,
    PanelModule
    ]
})
export class SharedModule { }
