import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 importa esto

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule], // 👈 agrega RouterModule aquí
  templateUrl: './buttons.html',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() bgColor: string = 'bg-gray-900';
  @Input() textColor: string = 'text-white';
  @Input() hoverBg: string = 'hover:bg-gray-700';
  @Input() link: string = '/'; // 👈 agrega la propiedad del link
}
