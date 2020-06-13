import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CvRoutingModule} from './cv-routing.module';
import {CvComponent} from './cv.component';
import {ExperienceComponent} from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {CertificationComponent} from './certification/certification.component';
import {CompetenceComponent} from './competence/competence.component';
import {LangueComponent} from './langue/langue.component';
import {CentreInteretComponent} from './centre-interet/centre-interet.component';
import {SharedModule} from '../shared/shared.module';
import { ViewCvComponent } from './view-cv/view-cv.component';


@NgModule({
  declarations: [
    CvComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationComponent,
    CompetenceComponent,
    LangueComponent,
    CentreInteretComponent,
    ViewCvComponent],
  imports: [
    CommonModule,
    CvRoutingModule,
    SharedModule
  ]
})
export class CvModule {
}
