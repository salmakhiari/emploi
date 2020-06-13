import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthenticationService} from '../services/authentication.service';

declare var $: any;


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit, OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  name;
  image;
  email;


  constructor(private modalService: NgbModal,
              private authenticationService: AuthenticationService) {
  }


  ngAfterViewInit() {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const jwtHelper = new JwtHelperService();
    const decodedToken = jwtHelper.decodeToken(token);
    const roles = decodedToken.roles;

    if (roles[0] === 'ROLE_CANDIDAT') {
      this.name = JSON.parse(localStorage.getItem('currentUser')).nomPrenom;
    } else if (roles[0] === 'ROLE_ENTREPRISE') {
      this.name = JSON.parse(localStorage.getItem('currentUser')).nomEntreprise;
    } else {
      this.name = 'Administrateur';
    }
    this.image = JSON.parse(localStorage.getItem('currentUser')).image;
    this.email = JSON.parse(localStorage.getItem('currentUser')).email;
  }

  logout() {
    this.authenticationService.logout();
  }
}
