import { Component } from '@angular/core';
import { NavBarComponent } from '../../../../shared/components/nav-bar/nav-bar.component';
import { ListItemComponent } from '../../../../shared/components/list-item/list-item.component';

@Component({
  selector: 'app-edit-invoice-form',
  standalone: true,
  imports: [NavBarComponent,ListItemComponent],
  templateUrl: './edit-invoice-form.component.html',
  styleUrl: './edit-invoice-form.component.scss'
})
export class EditInvoiceFormComponent {

}
