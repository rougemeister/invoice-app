import { Component, OnInit  } from '@angular/core';
import { NavBarComponent } from "../../../../shared/components/nav-bar/nav-bar.component";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Invoice } from '../models/invoice.model';
import { selectInvoiceById } from '../../store/selectors/invoice.selectors';
import { AppState } from '../../../../state/app.state';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [NavBarComponent, NavBarComponent, AsyncPipe, CommonModule],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.scss'
})

export class InvoiceDetailsComponent implements OnInit {
  invoice$?: Observable<Invoice | undefined>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.invoice$ = this.store.select(selectInvoiceById(id));
    this.invoice$.subscribe(invoice => {
      console.log('Fetched invoice:', invoice); // Log the fetched invoice to verify data
    });
  }
}


