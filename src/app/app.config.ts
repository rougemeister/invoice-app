import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { reducers } from './state/app.state';
import { localStorageSyncReducer } from './state/app.state';
import { InvoiceEffects } from './features/components/store/effects/invoice.effects';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers, {
      metaReducers: [localStorageSyncReducer]
    }),
    provideEffects(InvoiceEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withFetch())
  ]
};
