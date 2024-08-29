import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { InvoiceState, invoiceReducer } from '../features/components/store/reducers/invoice.reducer';

export interface AppState {
  invoices: InvoiceState;  
}


export const reducers: ActionReducerMap<AppState> = {
  invoices: invoiceReducer 
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
      const nextState = reducer(state, action);
      localStorage.setItem('invoices', JSON.stringify(nextState.invoices));
      return nextState;
    };
  }