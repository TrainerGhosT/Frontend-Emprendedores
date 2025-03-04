import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fair } from '../../Interfaces/fair.interface';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'FairCardComponent',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule , ],
  templateUrl: './fair-card.component.html',
})
export class FairCardComponent {
  @Input() fair!: Fair;

  
  
}