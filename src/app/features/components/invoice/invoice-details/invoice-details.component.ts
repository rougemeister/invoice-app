import { Component } from '@angular/core';
import { NavBarComponent } from "../../../../shared/components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [NavBarComponent, NavBarComponent],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss'
})
export class InvoiceDetailsComponent {

}
