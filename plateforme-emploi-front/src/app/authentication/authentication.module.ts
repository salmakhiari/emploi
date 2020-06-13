import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotfoundComponent } from './404/not-found.component';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';


import { AuthenticationRoutes } from './authentication.routing';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { ValidationComponent } from './validation/validation.component';
import { SignupEntrepriseComponent } from './signup-entreprise/signup-entreprise.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    SharedModule
  ],
  declarations: [
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
    ValidationComponent,
    SignupEntrepriseComponent,
  ]
})
export class AuthenticationModule {}
