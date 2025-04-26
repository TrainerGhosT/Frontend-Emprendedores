import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'NavigationHomeComponent',
    templateUrl: './navigation-home.component.html',
    imports: [],
    
})
export class NavigationHomeComponent  {
    

    @Input() userRole = '';
}
