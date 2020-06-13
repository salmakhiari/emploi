import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpecialiteComponent} from './specialite/specialite.component';
import {TypeOffreComponent} from './type-offre/type-offre.component';


const routes: Routes = [
  {path: 'specialite', component: SpecialiteComponent},
  {path: 'typeOffre', component: TypeOffreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
