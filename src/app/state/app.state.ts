import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { InvoiceState, invoiceReducer } from '../features/components/store/reducers/invoice.reducer';

// Define the global app state interface
export interface AppState {
  invoices: InvoiceState;  // Add more states as your app grows
}

// Combine all the feature reducers
export const reducers: ActionReducerMap<AppState> = {
  invoices: invoiceReducer  // Map the invoice feature state to the invoiceReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
      const nextState = reducer(state, action);
      localStorage.setItem('invoices', JSON.stringify(nextState.invoices));
      return nextState;
    };
  }