import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'FairFilterComponent',
    imports: [CommonModule, FormsModule],
    templateUrl: './fair-filter.component.html',
    
})
export class FairFilterComponent {
    @Input() categories: string[] = [];
    @Input() selectedCategory: string = '';
    @Input() search: string = '';
    @Input() pageSize: number = 12;
  
    @Output() categoryChange = new EventEmitter<string>();
    @Output() searchChange = new EventEmitter<string>();
    @Output() pageSizeChange = new EventEmitter<number>();
  
    onCategorySelect(category: string) {
      this.categoryChange.emit(category === this.selectedCategory ? '' : category);
    }
  
    onSearchChange(search: string) {
      this.searchChange.emit(search);
    }
  
    onPageSizeChange(pageSize: string) {
      this.pageSizeChange.emit(Number(pageSize));
    }
}
