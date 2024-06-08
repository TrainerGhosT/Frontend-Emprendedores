import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-feria',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, RouterLink],
  templateUrl: './feria.component.html',
  styleUrl: './feria.component.css'
})
export default class FeriaComponent {

}
