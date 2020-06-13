import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CandidatComponent } from './candidat/candidat.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CandidatComponent, EntrepriseComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
