import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/verify-token'; // Asegúrate de que la ruta sea correcta
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logout-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout-button.html'
})
export class LogoutButtonComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
}
