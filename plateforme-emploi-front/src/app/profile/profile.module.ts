import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileRoutes } from './profile.routing';
import { ProfileComponent } from './profile.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
    SharedModule,
    NgbModule
  ],
  declarations: [
    ProfileComponent,
  ]
})
export class ProfileModule {}
