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
          }
          this.loading.set(false);
        });
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
      
      
      formatDate(date?: Date): string {
        if (!date) return '';
        return new Date(date).toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
      }
    
      getCostDisplay(cost: number): string {
        return cost === 0 ? 'Gratuito' : `${cost.toFixed(0)} colones`;
      }
      
      volver() {
        this.router.navigate(['/ferias']);
      }
    
    
}
