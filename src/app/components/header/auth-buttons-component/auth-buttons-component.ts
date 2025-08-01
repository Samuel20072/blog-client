import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ importa CommonModule
import { ButtonComponent } from '../../buttons/buttons';
import { AuthService } from '../../../services/verify-token'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-auth-buttons-component',
  standalone: true,
  imports: [CommonModule, ButtonComponent], // ✅ agrega CommonModule aquí
  templateUrl: './auth-buttons-component.html',
})
export class AuthButtonsComponent {
  isLoggedIn: boolean;

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
}
