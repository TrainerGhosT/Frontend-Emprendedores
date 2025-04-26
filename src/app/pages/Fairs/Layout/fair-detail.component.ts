import { CommonModule } from '@angular/common';
import { Component, inject, signal,  } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Fair } from '../Interfaces/fair.interface';
import { FairService } from '../services/fair.service';
import { Router } from '@angular/router';

@Component({
    selector: 'FairDetailComponent',
    imports: [CommonModule, RouterModule],
    templateUrl: './fair-detail.component.html'
    
})
export default class FairDetailComponent  {
    private fairService = inject(FairService);
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    loading = signal(true);

    fair = signal<Fair | null>(null);

    constructor() {
      this.route.params.subscribe(params => {
        const id = Number(params['id']);
        const fairFound = this.fairService.getFairById(id);
        
        if (fairFound) {
          this.fair.set(fairFound);
          this.loading.set(false);
        } else {
          // Si no se encuentra en el estado local, obtener de la API
          this.fairService.getFairByIdFromApi(id).subscribe({
            next: (fair) => {
              this.fair.set(fair);
              this.loading.set(false);
            },
            error: (error) => {
              console.error('Error loading fair:', error);
              this.loading.set(false);
            }
          });
        }
      });
    }
      isIncluded(condition: 'Incluido' | 'No Incluido'): boolean {
        return condition === 'Incluido';
      }

      formatTime(time?: string): string { 
        if (!time) return '';
        // Convertir formato 24h a 12h 
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minutes} ${ampm}`;
      }
      
      
      formatDateTime(date: Date | string): string {
        if (!date) return '';
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString('es-CR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        });
      }
    
      
      getCostDisplay(cost: number): string {
        return cost === 0 ? 'Gratuito' : `${cost.toFixed(0)} colones`;
      }
      
      volver() {
        this.router.navigate(['/home/ferias']);
      }
    
    
}
