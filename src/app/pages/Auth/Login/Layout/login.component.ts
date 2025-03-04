import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../Service/auth-login.service';
import { Router } from '@angular/router';
import { LogoComponent } from '../../../../share/Logo/logo.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-login',
    imports: [CommonModule, ReactiveFormsModule, LogoComponent, MatIconModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export default class LoginComponent {
  loginForm: FormGroup;
  alertVisible = false;
  alertMessage = '';
  alertType: 'success' | 'warning' = 'warning'; // Define the alert type

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    this.loginForm = this.fb.group({
      Correo: ['', [Validators.required,  this.CorreoValidator]],
      Contraseña: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { Correo, Contraseña } = this.loginForm.value;
      this.authService.login(Correo, Contraseña).subscribe({
        next: () => {
          this.showAlert('Login successful!', 'success');
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 5000);
        },
        error: () => {
          this.showAlert('La información no es válida. Por favor, revise los datos ingresados', 'warning');
        }
      });
    } else {
      this.showAlert('Please fill in the form correctly.', 'warning');
    }
  }

  private showAlert(message: string, type: 'success' | 'warning') {
    this.alertMessage = message;
    this.alertType = type;
    this.alertVisible = true;
    setTimeout(() => {
      this.alertVisible = false;
    }, 15000); // 15 seconds
  }

  private CorreoValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (!value) {
      return null;
    }

    const isEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
    const isCedula = /^\d{9}$/.test(value);

    if (!isEmail && !isCedula) {
      return { invalidCorreo: true };
    }

    return null;
  }
}
