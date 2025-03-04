import { Component, OnInit } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'AvatarMenuComponent',
    imports: [MatMenuModule, MatIconModule, RouterLink], 
    templateUrl: './avatar-menu.component.html'
})
export class AvatarMenuComponent  {
    
}
