import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../../components/Logo/logo.component';
@Component({
    selector: 'app-feria',
    imports: [MatButtonModule, MatMenuModule, MatIconModule, RouterLink, LogoComponent],
    templateUrl: './feria.component.html',
    styleUrl: './feria.component.css'
})
export default class FeriaComponent {

}
