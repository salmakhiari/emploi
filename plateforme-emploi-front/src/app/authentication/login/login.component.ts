import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {Utilisateur} from '../../shared/model/utilisateur';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {UtilisateurService} from '../../shared/services/utilisateur.service';


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

      localStorage.setItem('token', res.token);
      localStorage.setItem('currentUser', JSON.stringify(res.user));
      this.router.navigate(['/dashboard']);

    }, ex => {
      this.messageService.add({
        severity: 'error', summary: 'Erreur d\'authentification'
        , detail: ex.error.message
      });
      console.log(ex);
    });
  }
}
