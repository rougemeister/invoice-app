import { Component } from '@angular/core';
import { NavBarComponent } from '../../../../shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-new-invoice-form',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './new-invoice-form.component.html',
  styleUrl: './new-invoice-form.component.scss'
})
export class NewInvoiceFormComponent {

}
