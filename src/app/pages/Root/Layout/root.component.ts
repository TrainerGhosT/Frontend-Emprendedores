import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LogoComponent } from '../../../share/Logo/logo.component';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-home',
    imports: [CommonModule, MatButtonModule, MatMenuModule, LogoComponent, RouterLink],
    templateUrl: './root.component.html',
    styles: ''
})
export default class RootComponent {
  title = 'frontend';
}
