import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OffreComponent} from './offre.component';
import {AddOffreComponent} from './add-offre/add-offre.component';
import {ShowOffreComponent} from './show-offre/show-offre.component';
import {DetailOffreComponent} from './show-offre/detail-offre/detail-offre.component';


const routes: Routes = [
  {path: 'show', component: ShowOffreComponent},
  {path: 'show/:id', component: DetailOffreComponent},
  {path: 'entreprise', component: OffreComponent},
  {path: 'entreprise/new', component: AddOffreComponent},
  {path: 'entreprise/edit/:id', component: AddOffreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffreRoutingModule { }
