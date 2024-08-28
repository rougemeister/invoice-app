import { createAction, props } from '@ngrx/store';
import { Invoice } from '../../invoice/models/invoice.model';

export const loadInvoices = createAction('[Invoice List] Load Invoices');
export const loadInvoicesSuccess = createAction('[Invoice List] Load Invoices Success', props<{ invoices: Invoice[] }>());
export const addInvoice = createAction('[Invoice Form] Add Invoice', props<{ invoice: Invoice }>());
export const editInvoice = createAction('[Invoice Form] Edit Invoice', props<{ invoice: Invoice }>());
export const deleteInvoice = createAction('[Invoice List] Delete Invoice', props<{ id: string }>());
