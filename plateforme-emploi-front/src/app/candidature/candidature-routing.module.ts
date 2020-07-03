import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CandidatComponent} from './candidat/candidat.component';
import {EntrepriseComponent} from './entreprise/entreprise.component';


const routes: Routes = [
  {path: 'candidat', component: CandidatComponent},
  {path: 'entreprise/:id', component: EntrepriseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatureRoutingModule {
}
