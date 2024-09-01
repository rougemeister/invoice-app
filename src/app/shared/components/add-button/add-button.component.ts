import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss'
})
export class AddButtonComponent {

  constructor(private router: Router) { }
  navigateToNewInvoiceForm() {
    this.router.navigate(['/new-invoice']);
  }
}
