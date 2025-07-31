import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [ HeaderComponent, FooterComponent],
  templateUrl: './home.html',
})
export class HomeComponent {

}
