import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {Utilisateur} from '../../shared/model/utilisateur';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {UtilisateurService} from '../../shared/services/utilisateur.service';
import {JwtHelperService} from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user = new Utilisateur();

  constructor(private authenticationService: AuthenticationService,
              private messageService: MessageService,
              private utilisateurService: UtilisateurService,
              private router: Router) {
  }

  login() {
    this.authenticationService.authenticate(this.user).subscribe(res => {
      console.log(res);
      localStorage.setItem('token', res.body.token);
      localStorage.setItem('currentUser', JSON.stringify(res.body.user));
      const jwtHelper = new JwtHelperService();
      const decodedToken = jwtHelper.decodeToken(localStorage.getItem('token'));
      const roles = decodedToken.roles;

      if (roles[0] === 'ROLE_CANDIDAT') {
        this.router.navigate(['/offre/show']);
      } else if (roles[0] === 'ROLE_ENTREPRISE') {
        this.router.navigate(['/offre/entreprise']);
      } else {
        this.router.navigate(['/user/candidat']);
      }

    }, ex => {
      this.messageService.add({
        severity: 'error', summary: 'Erreur d\'authentification'
        , detail: ex.error.message
      });
      console.log(ex);
    });
  }
}
