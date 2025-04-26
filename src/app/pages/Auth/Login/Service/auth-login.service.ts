import { Injectable, signal, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthResponse } from '../data/auth-login.data';
import { jwtDecode } from 'jwt-decode'; 
import { environment } from '../../../../../enviroments/enviroment';

export interface UserInfo {
  name: string;
  surname: string;
  role: string;
  initials: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private _isAuthenticated = signal<boolean>(false);
  private _token = signal<string | null>(null);
  private _userInfo = signal<UserInfo | null>(null);

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
        localStorage.removeItem('user_info');
        this._isAuthenticated.set(false);
        this._userInfo.set(null);
      }
    });

    // Comprobar token y userInfo al iniciar
    const token = localStorage.getItem('auth_token');
    const userInfo = localStorage.getItem('user_info');
    
    if (token) this._token.set(token);
    if (userInfo) this._userInfo.set(JSON.parse(userInfo));
  }

  login(Correo: string, Contraseña: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, {
      Correo,
      Contraseña,
    }).pipe(
      tap({
        next: (response) => {
          console.log('Api response:', response);
          this._token.set(response.accessToken);
          
          // Procesar información del usuario
          if (response.accessToken) {
            const decodedToken: any = jwtDecode(response.accessToken);
            const emprendedor = response.emprendedor;
            
            const userInfo: UserInfo = {
              name: emprendedor.Nombre || '',
              surname: emprendedor.Apellidos || '',
              role: decodedToken.role?.Descripcion || 'Emprendedor',
              initials: this.getInitials(emprendedor.Nombre, emprendedor.Apellidos)
            };
            
            this._userInfo.set(userInfo);
            localStorage.setItem('user_info', JSON.stringify(userInfo));
          }
        },
        error: (error) => {
          console.error('Login error:', error);
        },
      })
    );
  }

  private getInitials(name: string, surname: string): string {
    const nameInitial = name?.charAt(0) || '';
    const surnameInitial = surname?.charAt(0) || '';
    return (nameInitial + surnameInitial).toUpperCase();
  }

  logout() {
    this._token.set(null);
    this.userInfo.set(null);
    this.router.navigate(['/']);
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  get userInfo() {
    return this._userInfo;
  }

  checkAuthentication() {
    const token = localStorage.getItem('auth_token');
    const userInfo = localStorage.getItem('user_info');
    
    if (token) {
      this._token.set(token);
      if (userInfo) {
        this._userInfo.set(JSON.parse(userInfo));
      }
      console.log('token valido');
    } else {
      this._token.set(null);
    }

    return token;
  }
}