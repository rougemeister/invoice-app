import { createReducer, on } from '@ngrx/store';
import { loadInvoicesSuccess, addInvoice, editInvoice, deleteInvoice } from '../actions/invoice.actions';
import { Invoice } from '../../invoice/models/invoice.model';

export interface InvoiceState {
  entities: { [id: string]: Invoice; };
  invoices: Invoice[];
  selectedInvoice: Invoice | null;
}

export const initialState: InvoiceState = {
  invoices: [],
  selectedInvoice: null,
  entities: {}
};

export const invoiceReducer = createReducer(
  initialState,
  on(loadInvoicesSuccess, (state, { invoices }) => ({ ...state, invoices })),
  on(addInvoice, (state, { invoice }) => ({ ...state, invoices: [...state.invoices, invoice] })),
  on(editInvoice, (state, { invoice }) => ({
    ...state,
    invoices: state.invoices.map(inv => inv.id === invoice.id ? invoice : inv)
  })),
  on(deleteInvoice, (state, { id }) => ({
    ...state,
    invoices: state.invoices.filter(inv => inv.id !== id)
  }))
);
