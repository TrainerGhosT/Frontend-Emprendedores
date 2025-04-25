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
@Component({
  selector: 'HomeComponent',
  templateUrl: './home.component.html',
  styles: '',
  imports: [AvatarMenuComponent, LogoComponent, CommonModule, EmptyDataComponent],
})
export default class HomeComponent {
  

  userName = signal('Juan');
  userRole = signal('Administrador');
  @Input() fair!: FairTest;
  registeredFairs = signal<FairTest[]>([
    
  ]);
}
