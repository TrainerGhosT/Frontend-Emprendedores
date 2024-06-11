import { Routes } from '@angular/router';
import RootComponent from './pages/Root/Layout/root.component';

export const routes: Routes = [
  { path: '', component: RootComponent, pathMatch: 'full' },
  // {
  //   path: "Login",
  //   loadComponent: () =>
  //     import("./emprendedores/auth/components/login/login.component"),
  // },
  {
    path: 'Ferias',
    loadComponent: () => import('./pages/Ferias/Layout/feria.component'),
  },
  {
    path: 'Login',
    loadComponent: () => import('./pages/Auth/Login/Layout/login.component'),
  },
  // { path: "Registro", component: SignupComponent },
  // { path: "Inicio", component: HomeComponent },
  // { path: "Emprendedores", component: EmprendedoresComponent },
  // { path: "Transacciones", component: TransaccionesComponent },
  // { path: "Movimientos", component: MovimientosComponent },
  { path: '**', redirectTo: '' },
];
