import { Routes } from '@angular/router';
import RootComponent from './pages/Root/Layout/root.component';

export const routes: Routes = [
  { path: '', component: RootComponent, pathMatch: 'full' },
  
  {
    path: 'ferias',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/Fairs/Layout/fair-list.component')
      },
      {
        path: 'detalle-feria/:id',
        loadComponent: () => import('./pages/Fairs/Layout/fair-detail.component'),
        
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/Auth/Login/Layout/login.component'),
  },
  
  { path: '**', redirectTo: '' },
];
