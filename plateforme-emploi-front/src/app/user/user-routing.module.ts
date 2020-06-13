import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CandidatComponent} from './candidat/candidat.component';
import {EntrepriseComponent} from './entreprise/entreprise.component';


const routes: Routes = [
  {path: 'candidat', component: CandidatComponent},
  {path: 'entreprise', component: EntrepriseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
