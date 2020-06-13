import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';


export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: Dashboard1Component,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard 1' }
          ]
        }
      }
    ]
  }
];
