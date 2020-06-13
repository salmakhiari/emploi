import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv.component';
import {ViewCvComponent} from './view-cv/view-cv.component';


const routes: Routes = [ {path: '', component: CvComponent, data: {
    title: 'Curriculum vitæ'
  }},
  {path: 'view', component: ViewCvComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
