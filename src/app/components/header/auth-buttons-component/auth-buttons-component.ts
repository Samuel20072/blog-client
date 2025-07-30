import { Component } from '@angular/core';
import { ButtonComponent } from '../../buttons/buttons'; // Asegúrate de tener el nombre y ruta correcta

@Component({
  selector: 'app-auth-buttons-component',
  standalone: true, 
  imports: [ButtonComponent],
  templateUrl: './auth-buttons-component.html',
})
export class AuthButtonsComponent {}
