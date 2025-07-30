import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule], // 👈 esto es lo que soluciona el error
  templateUrl: './buttons.html',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() bgColor: string = 'bg-gray-900';
  @Input() textColor: string = 'text-white';
  @Input() hoverBg: string = 'hover:bg-gray-700';
}
