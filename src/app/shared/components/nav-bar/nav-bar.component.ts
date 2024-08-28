import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { ThemeTogglerComponent } from "../theme-toggler/theme-toggler.component";
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LogoComponent, ThemeTogglerComponent, ProfileComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
