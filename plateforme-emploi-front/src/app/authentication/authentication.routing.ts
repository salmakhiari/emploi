import { Routes } from '@angular/router';

import { NotfoundComponent } from './404/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ValidationComponent} from './validation/validation.component';
import {SignupEntrepriseComponent} from './signup-entreprise/signup-entreprise.component';


export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotfoundComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'signup-entreprise',
        component: SignupEntrepriseComponent
      },
      {
        path: 'validate/:id',
        component: ValidationComponent
      }
    ]
  }
];
