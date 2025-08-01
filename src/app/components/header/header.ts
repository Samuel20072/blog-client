import { Component } from '@angular/core';
import { LogoComponent } from './logo-component/logo-component';
import { NavComponent } from './nav-component/nav-component';
import { AuthButtonsComponent } from './auth-buttons-component/auth-buttons-component';
import {LogoutButtonComponent} from '../logout-button/logout-button';

@Component({
  selector: 'app-header',
  imports: [LogoComponent,NavComponent,AuthButtonsComponent,LogoutButtonComponent],
  templateUrl: './header.html',
})
export class HeaderComponent {

}
