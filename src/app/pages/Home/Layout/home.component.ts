import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { AvatarMenuComponent } from '../../../share/AvatarMenu/avatar-menu.component';
import { LogoComponent } from '../../../share/Logo/logo.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Fair } from '../../Fairs/Interfaces/fair.interface';
import { AuthService } from '../../Auth/Login/Service/auth-login.service';
import { EmptyDataComponent } from '../../../share/EmptyData/empty-data.component';

interface FairTest {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
}

interface NavItem {
  title: string;
  description: string;
  icon: string;
  route: string;
  notification?: number;
}

@Component({
  selector: 'HomeComponent',
  templateUrl: './home.component.html',
  styles: '',
  imports: [
    AvatarMenuComponent,
    LogoComponent,
    CommonModule,
    EmptyDataComponent,
  ],
})
export default class HomeComponent implements OnInit {  
  private authService = inject(AuthService);

  userName = signal('');
  userRole = signal('');
  @Input() fair!: FairTest;

  registeredFairs = signal<FairTest[]>([]);

  // Navigation items for different roles
  emprendedorNavItems = signal<NavItem[]>([
    {
      title: 'Perfil',
      description: 'Gestiona tu información personal',
      icon: '<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>',
      route: '/home/perfil',
    },
    {
      title: 'Ferias',
      description: 'Explora los eventos disponibles',
      icon: '<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>',
      route: '/home/ferias',
    },
    {
      title: 'Notificaciones',
        description: 'Recibe avisos cuando se publiquen ferias de tu interés',
      icon: '<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>',
      route: '/home/notificaciones',
      notification: 3,
    },
    {
      title: 'Historial y Estadística',
      description: 'Revisa el historial de tus inscripciones y estadísticas',
      icon: '<path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>',
      route: '/home/historial',
    },
  ]);

  adminNavItems = signal<NavItem[]>([
    {
      title: 'Perfil',
      description: 'Gestiona tu información personal',
      icon: '<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>',
      route: '/home/profile',
    },
    {
      title: 'Emprendedores',
      description: 'Administra la información de Emprendedores',
      icon: '<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-1.717 0-2.687.63-3.24 1.276C1.163 10.97 1 11.738 1 12a1 1 0 0 0 1 1h.001l.07.001.164.003.435.01.418.009.37.008.245.005c.173.003.34.005.5.005.664 0 1.303-.07 1.764-.198A2 2 0 0 1 7 14c.95 0 1.55-.596 1.55-1.457 0-.317-.056-.62-.17-.908a4.1 4.1 0 0 0-1.444-.355zM8 5c0 .014-.002.027-.004.04a3 3 0 0 1-2.932 2.954 3 3 0 0 1-2.046-.804c.023-.113.06-.223.107-.329a4.1 4.1 0 0 1 1.175-.795 5.8 5.8 0 0 1 2.7-.566c.35.019.685.055.996.107A3 3 0 0 1 8 5"/>',
      route: '/home/mantenimiento-emprendedores',
    },
    {
      title: 'Ferias',
      description: 'Administra la información de Ferias',
      icon: '<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>',
      route: '/home/mantenimiento-ferias',
    },
    {
      title: 'Reportes',
      description: 'Genera Informes',
      icon: '<path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>',
      route: '/home/reportes',
    },
  ]);

  // Computed signal for navigation items based on role
  navItems = signal<NavItem[]>([]);

  ngOnInit(): void {
    // Get user info from auth service
    const userInfo = this.authService.userInfo();

    if (userInfo) {
      this.userName.set(userInfo.name);
      this.userRole.set(userInfo.role);

      // Set navigation items based on user role
      if (userInfo.role === 'Administrador') {
        this.navItems.set(this.adminNavItems());
      } else {
        this.navItems.set(this.emprendedorNavItems());
      }
    }
    this.registeredFairs.set([]);
  }
}
