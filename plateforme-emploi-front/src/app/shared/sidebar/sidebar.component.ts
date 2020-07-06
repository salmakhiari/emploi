import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {JwtHelperService} from '@auth0/angular-jwt';
import {NgxPermissionsService} from 'ngx-permissions';
import {AuthenticationService} from '../services/authentication.service';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: any[];
  name;
  image;
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private permissionsService: NgxPermissionsService,
    private authenticationService: AuthenticationService
  ) {}

  // End open close
  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
    const token = localStorage.getItem('token');
    const jwtHelper = new JwtHelperService();
    const decodedToken = jwtHelper.decodeToken(token);
    const roles = decodedToken.roles;

    if (roles[0] === 'ROLE_CANDIDAT') {
      this.name = JSON.parse(localStorage.getItem('currentUser')).nomPrenom;
      this.image = JSON.parse(localStorage.getItem('currentUser')).image;
    } else if (roles[0] === 'ROLE_ENTREPRISE') {
      this.name = JSON.parse(localStorage.getItem('currentUser')).nomEntreprise;
      this.image = JSON.parse(localStorage.getItem('currentUser')).image;
    } else {
      this.image = JSON.parse(localStorage.getItem('currentUser')).image;
      this.name = 'Administrateur';
    }



    this.permissionsService.loadPermissions(roles);
  }


  logout() {
   this.authenticationService.logout();
  }
}
