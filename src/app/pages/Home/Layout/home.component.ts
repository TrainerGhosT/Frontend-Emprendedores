import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LogoComponent } from '../../../components/Logo/logo.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, LogoComponent],
  templateUrl: './home.component.html',
  styles: ''
})
export default class HomeComponent {
  title = 'frontend';
}
