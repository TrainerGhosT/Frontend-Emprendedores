import { inject, Injectable, signal } from '@angular/core';
import { Fair } from '../Interfaces/fair.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../enviroments/enviroment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FairService {
  private apiUrl = `${environment.apiUrl}/ferias/listar-ferias`;
  private http = inject(HttpClient);
  private fairs = signal<Fair[]>([]);

  constructor() {
    this.loadFairs();
  }



  private loadFairs(): void {
    this.http.get<Fair[]>(this.apiUrl).pipe(
      tap(fairs => this.fairs.set(fairs))
    ).subscribe();
  }

  getFairs(): Fair[] {
    console.log(this.fairs());
    return this.fairs();
  }

  refreshFairs(): Observable<Fair[]> {
    return this.http.get<Fair[]>(this.apiUrl).pipe(
      tap(fairs => this.fairs.set(fairs))
    );
  }

  getFairById(id: number): Fair | undefined {
    return this.fairs().find((fair) => fair.Id_Feria === id);
  }

  getFairByIdFromApi(id: number): Observable<Fair> {
    return this.http.get<Fair>(`${this.apiUrl}/${id}`);
  }
}
