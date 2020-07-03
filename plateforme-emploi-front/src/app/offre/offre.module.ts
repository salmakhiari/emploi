import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { OffreComponent } from './offre.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import {SharedModule} from '../shared/shared.module';
import { ShowOffreComponent } from './show-offre/show-offre.component';
import { DetailOffreComponent } from './show-offre/detail-offre/detail-offre.component';


@NgModule({
  declarations: [OffreComponent, AddOffreComponent, ShowOffreComponent, DetailOffreComponent],
  imports: [
    CommonModule,
    OffreRoutingModule,
    SharedModule
  ]
})
export class OffreModule { }
