import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NavBarComponent } from '../../../../shared/components/nav-bar/nav-bar.component';
import { ListItemComponent } from '../../../../shared/components/list-item/list-item.component';
import { selectAllInvoices } from '../../store/selectors/invoice.selectors';
import { loadInvoices } from '../../store/actions/invoice.actions';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice.model';
import { AppState } from '../../../../state/app.state';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [NavBarComponent,ListItemComponent, AsyncPipe],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss'
})
export class InvoiceListComponent {
  invoices$: Observable<Invoice[]>;  // Observable to hold the list of invoices

  constructor(private store: Store<AppState>) {
    this.invoices$ = this.store.select(selectAllInvoices);
  }
  
  ngOnInit(): void {
    this.store.dispatch(loadInvoices());
  }


}


