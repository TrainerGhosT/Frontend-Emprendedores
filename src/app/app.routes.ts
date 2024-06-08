import { Routes } from '@angular/router';
import HomeComponent from './pages/Home/Layout/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // {
  //   path: "Login",
  //   loadComponent: () =>
  //     import("./emprendedores/auth/components/login/login.component"),
  // },
  {
    path: 'Ferias',
    loadComponent: () => import('./pages/Ferias/layout/feria.component'),
  },
  // { path: "Registro", component: SignupComponent },
  // { path: "Inicio", component: HomeComponent },
  // { path: "Emprendedores", component: EmprendedoresComponent },
  // { path: "Transacciones", component: TransaccionesComponent },
  // { path: "Movimientos", component: MovimientosComponent },
  { path: '**', redirectTo: '' },
];
