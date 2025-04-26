import { Component, inject, OnInit } from '@angular/core';
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
  fairs: Fair[] = [];

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
  isLoading = true;

  ngOnInit(): void {
    this.loadFairs();
  }

  loadFairs(): void {
    this.isLoading = true;
    this.fairService.refreshFairs().subscribe({
      next: (data) => {
        this.fairs = this.fairService.getFairs();
        console.log('Ferias Obtenidas:', this.fairs);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading fairs:', error);
        this.isLoading = false;
      }
    });
  }

  get filteredFairs(): Fair[] {
    return this.fairs.filter(
      (fair) =>
        (!this.selectedCategory || fair.Area === this.selectedCategory) &&
        (!this.searchTerm ||
          fair.Titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          fair.Descripcion_Corta
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
