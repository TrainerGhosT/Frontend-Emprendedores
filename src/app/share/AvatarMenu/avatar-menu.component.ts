import { Component, inject, OnInit } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../pages/Auth/Login/Service/auth-login.service';

@Component({
    selector: 'AvatarMenuComponent',
    imports: [MatMenuModule, MatIconModule, RouterLink], 
    templateUrl: './avatar-menu.component.html'
})
export class AvatarMenuComponent  {

    private authService = inject(AuthService);

    OnClickLogout() {
        this.authService.logout();
    }
    
}
