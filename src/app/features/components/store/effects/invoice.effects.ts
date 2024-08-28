import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { InvoiceService } from '../../../../core/services/invoice.service';
import { loadInvoices, loadInvoicesSuccess } from '../actions/invoice.actions';

@Injectable()
export class InvoiceEffects {
  constructor(private actions$: Actions, private invoiceService: InvoiceService) {}

  loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInvoices),
      switchMap(() =>
        this.invoiceService.getInvoices().pipe(
          map(invoices => loadInvoicesSuccess({ invoices })),
          catchError(() => of({ type: '[Invoice List] Load Invoices Failure' }))
        )
      )
    )
  );
}
