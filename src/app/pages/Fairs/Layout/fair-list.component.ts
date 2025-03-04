import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LogoComponent } from '../../../share/Logo/logo.component';
import { FairCardComponent } from '../components/Card/fair-card.component';
import { FairFilterComponent } from '../components/Filters/fair-filter.component';

import { AvatarMenuComponent } from '../../../share/AvatarMenu/avatar-menu.component';
import { Fair, PageSize } from '../Interfaces/fair.interface';
import { FairPaginationComponent } from '../components/Pagination/fair-pagination.component';
import { FairService } from '../services/fair.service';
@Component({
  selector: 'FairListComponent',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    LogoComponent,
    AvatarMenuComponent,
    FairCardComponent,
    FairFilterComponent,
    FairPaginationComponent,
    
  ],
  templateUrl: './fair-list.component.html',
  styleUrl: './fair-list.component.css',
})
export default class FairListComponent {
  
  private fairService = inject(FairService);
  fairs = this.fairService.getFairs();

  categories: string[] = [
    'Tecnología',
    'Gastronomía',
    'Emprendimiento',
    'Educación',
    'Automotriz'
    
  ];
  selectedCategory: string = '';
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: PageSize = 6;

  get filteredFairs(): Fair[] {
    return this.fairs.filter(
      (fair) =>
        (!this.selectedCategory || fair.category === this.selectedCategory) &&
        (!this.searchTerm ||
          fair.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          fair.description
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase()))
    );
  }

  get paginatedFairs(): Fair[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredFairs.slice(startIndex, startIndex + this.pageSize);
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
  }

  onSearchChange(search: string) {
    this.searchTerm = search;
    this.currentPage = 1;
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onPageSizeChange(size: number) {
    this.pageSize = size as PageSize;
    this.currentPage = 1;
  }
}
