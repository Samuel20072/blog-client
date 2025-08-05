import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // 👈 añade HeaderComponent
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('blog');
}
