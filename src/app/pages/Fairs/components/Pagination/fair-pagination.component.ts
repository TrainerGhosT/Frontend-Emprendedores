import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'FairPaginationComponent',
  imports: [CommonModule],
  templateUrl: './fair-pagination.component.html',
})
export class FairPaginationComponent {
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 12;
  @Input() totalItems: number = 0;

  @Output() pageChange = new EventEmitter<number>();

  protected Math = Math;

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get pages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
}
