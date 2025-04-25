import { Routes } from '@angular/router';
import RootComponent from './pages/Root/Layout/root.component';
import HomeComponent from './pages/Home/Layout/home.component';

export const routes: Routes = [
  { path: '', component: RootComponent, pathMatch: 'full' },
  {
    path: 'home',
    
    children: [

      {
        path: '',
        loadComponent: () =>
          import('./pages/Home/Layout/home.component'),

      },
      {


        path: 'ferias',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/Fairs/Layout/fair-list.component'),
          },
          {
            path: 'detalle-feria/:id',
            loadComponent: () =>
              import('./pages/Fairs/Layout/fair-detail.component'),
          },
        ],
      },
      // {
      //   path: 'perfil',
      //   loadComponent: () =>
      //     import('./pages/Profile/Layout/profile.component'),
      // },
      // {
      //   path: 'emprendedores',
      //   loadComponent: () =>
      //     import('./pages/Entrepreneurs/Layout/entrepreneur.component'),
      // },
      // {
      //   path: 'historial',
      //   loadComponent: () =>
      //     import('./pages/History/Layout/history.component'),
      // },
      
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/Auth/Login/Layout/login.component'),
  },
  { path: '**', redirectTo: '' },
];
