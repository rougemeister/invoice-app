import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { NavBarComponent } from '../../../../shared/components/nav-bar/nav-bar.component';
import { ListItemComponent } from '../../../../shared/components/list-item/list-item.component';
import { selectAllInvoices } from '../../store/selectors/invoice.selectors';
import { loadInvoices } from '../../store/actions/invoice.actions';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice.model';
import { AppState } from '../../../../state/app.state';
import { Store } from '@ngrx/store';
import { AddButtonComponent } from "../../../../shared/components/add-button/add-button.component";
import { FilterComponent } from "../../../../shared/components/filter/filter.component";


@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [NavBarComponent, ListItemComponent, AsyncPipe, AddButtonComponent, AddButtonComponent, FilterComponent],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent {
  invoices$: Observable<Invoice[]>; 

  constructor(private store: Store<AppState>, private router: Router) {
    this.invoices$ = this.store.select(selectAllInvoices);
  }
  
  ngOnInit(): void {
    this.store.dispatch(loadInvoices());
    console.log(this.invoices$)
  }



  viewInvoiceDetails(id: string): void {
    this.router.navigate(['/invoice', id]);
  }


}


 