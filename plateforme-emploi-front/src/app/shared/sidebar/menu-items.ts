import { RouteInfo } from './sidebar.metadata';
import {stringify} from 'querystring';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Utilisateurs',
    icon: 'sl-icon-people',
    class: 'has-arrow',
    extralink: false,
    roles: ['ROLE_ADMIN'],
    submenu: [
      {
        path: '/user/candidat',
        title: 'Candidat',
        icon: 'icon-Car-Wheel',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/user/entreprise',
        title: 'Entreprise',
        icon: 'icon-Car-Wheel',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },

  {
    path: '',
    title: 'Offres',
    icon: 'sl-icon-briefcase',
    class: 'has-arrow',
    extralink: false,
    roles: ['ROLE_ENTREPRISE'],
    submenu: [
      {
        path: '/offre/entreprise',
        title: 'Mes offres',
        icon: 'sl-icon-book-open',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/offre/entreprise/new',
        title: 'Nouvelle offre',
        icon: 'icon-Car-Wheel',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Paramètrages',
    icon: 'icon-Security-Settings',
    class: 'has-arrow',
    extralink: false,
    roles: ['ROLE_ADMIN'],
    submenu: [
      {
        path: '/settings/specialite',
        title: 'Specialité',
        icon: 'icon-Car-Wheel',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/settings/typeOffre',
        title: 'Type offre',
        icon: 'icon-Car-Wheel',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },

  {
    path: '/offre/show',
    title: 'Offre',
    icon: 'sl-icon-briefcase',
    class: '',
    extralink: false,
    roles: ['ROLE_CANDIDAT'],
    submenu: [ ]
  },
  {
    path: '',
    title: 'Mon CV',
    icon: ' sl-icon-doc',
    class: 'has-arrow',
    extralink: false,
    roles: ['ROLE_CANDIDAT'],
    submenu: [
      {
        path: '/cv',
        title: 'Modifier CV',
        icon: 'icon-Car-Wheel',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/cv/view',
        title: 'Visualiser CV',
        icon: 'icon-Car-Wheel',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/candidature/candidat',
    title: 'Mes candidatures',
    icon: 'sl-icon-docs',
    class: '',
    extralink: false,
    roles: ['ROLE_CANDIDAT'],
    submenu: [ ]
  },

];
