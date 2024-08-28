import { createSelector, createFeatureSelector } from '@ngrx/store';
import { InvoiceState } from '../reducers/invoice.reducer';

// Select the invoice feature state
export const selectInvoiceState = createFeatureSelector<InvoiceState>('invoices');

// Select all invoices
export const selectAllInvoices = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.invoices
);

// Select a specific invoice by id
export const selectInvoiceById = (invoiceId: string) => createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.invoices.find(invoice => invoice.id === invoiceId)
);
