import { Routes } from '@angular/router';
import HomeComponent from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // {
  //   path: "Login",
  //   loadComponent: () =>
  //     import("./emprendedores/auth/components/login/login.component"),
  // },
  {
    path: 'Ferias',
    loadComponent: () => import('./ferias/components/feria.component'),
  },
  // { path: "Registro", component: SignupComponent },
  // { path: "Inicio", component: HomeComponent },
  // { path: "Emprendedores", component: EmprendedoresComponent },
  // { path: "Transacciones", component: TransaccionesComponent },
  // { path: "Movimientos", component: MovimientosComponent },
  { path: '**', redirectTo: '' },
];
