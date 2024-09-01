import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponent } from './features/components/invoice/invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './features/components/invoice/invoice-details/invoice-details.component';


export const routes: Routes = [
  { path: '', component: InvoiceListComponent },
  { path: 'invoice/:id', component: InvoiceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
