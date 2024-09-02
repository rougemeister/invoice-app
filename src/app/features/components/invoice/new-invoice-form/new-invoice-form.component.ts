import { Component } from '@angular/core';
import { NavBarComponent } from '../../../../shared/components/nav-bar/nav-bar.component';
import { BackButtonComponent } from '../../../../shared/components/back-button/back-button.component';

@Component({
  selector: 'app-new-invoice-form',
  standalone: true,
  imports: [NavBarComponent,BackButtonComponent],
  templateUrl: './new-invoice-form.component.html',
  styleUrl: './new-invoice-form.component.scss'
})
export class NewInvoiceFormComponent {

}
