import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { OffreComponent } from './offre.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [OffreComponent, AddOffreComponent],
  imports: [
    CommonModule,
    OffreRoutingModule,
    SharedModule
  ]
})
export class OffreModule { }
