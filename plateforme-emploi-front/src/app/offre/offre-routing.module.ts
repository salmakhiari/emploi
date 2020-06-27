import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OffreComponent} from './offre.component';
import {AddOffreComponent} from './add-offre/add-offre.component';


const routes: Routes = [
  {path: 'entreprise', component: OffreComponent},
  {path: 'entreprise/new', component: AddOffreComponent},
  {path: 'entreprise/edit/:id', component: AddOffreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffreRoutingModule { }
