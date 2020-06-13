import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import {SpecialiteComponent} from './specialite/specialite.component';
import {TypeOffreComponent} from './type-offre/type-offre.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [SpecialiteComponent, TypeOffreComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
