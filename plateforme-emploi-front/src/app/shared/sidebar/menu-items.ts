import { RouteInfo } from './sidebar.metadata';
import {stringify} from 'querystring';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Dashboards',
    icon: 'icon-Car-Wheel',
    class: '',
    extralink: false,
    submenu: [],
    roles: ['ROLE_ADMIN', 'ROLE_CANDIDAT', 'ROLE_ENTREPRISE']
  },
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

];
