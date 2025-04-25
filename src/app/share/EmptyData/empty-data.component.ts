import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'EmptyDataComponent',
    imports: [CommonModule, RouterModule], 
    templateUrl: './empty-data.component.html' ,
    styles: ''
})
export class EmptyDataComponent {
    @Input() title: string = 'No data available';
    @Input() description: string = 'Start by adding some content';
    @Input() actionText: string = 'Get Started';
    @Input() actionLink: string = '/';
    
}
