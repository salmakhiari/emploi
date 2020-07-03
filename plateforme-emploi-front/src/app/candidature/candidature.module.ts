import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatureRoutingModule } from './candidature-routing.module';
import { CandidatComponent } from './candidat/candidat.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CandidatComponent, EntrepriseComponent],
  imports: [
    CommonModule,
    CandidatureRoutingModule,
    SharedModule
  ]
})
export class CandidatureModule { }
