import { Injectable, signal, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthResponse } from '../data/auth-login.data';

@Injectable({
  providedIn: 'root', // Esto asegura que el servicio esté disponible en toda la aplicación
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';  // URL de tu backend
  private _isAuthenticated = signal<boolean>(false);
  private _token = signal<string | null>(null);

  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() {
    effect(() => {
      const token = this._token();
      if (token) {
        localStorage.setItem('auth_token', token);
        this._isAuthenticated.set(true);
      } else {
        localStorage.removeItem('auth_token');
        this._isAuthenticated.set(false);
      }
    }, { allowSignalWrites: true });  // Permite escribir en señales dentro de este efecto
  }

  login(Correo: string, Contraseña: string): Observable<AuthResponse> {
    const request = this.http.post<AuthResponse>(`${this.apiUrl}/login`, { Correo, Contraseña });
    
    return request.pipe(
      tap((response) => {
        console.log(response);
        this._token.set(response.accessToken);
        //this.router.navigate(['/']);
      })
    );
  }

  logout() {
    this._token.set(null);
    this.router.navigate(['/login']);
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  // Método para verificar si el usuario está autenticado basado en el token
  checkAuthentication() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      this._token.set(token);
    } else {
      this._token.set(null);
    }
  }
}
