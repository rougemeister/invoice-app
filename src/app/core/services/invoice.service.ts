import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Invoice } from '../../features/components/invoice/models/invoice.model';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private jsonUrl = '../../assets/data/data.json'; 

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.jsonUrl);
  }

  getInvoiceById(id: string): Observable<Invoice | undefined> {
    return this.http.get<Invoice[]>(this.jsonUrl).pipe(
      map(invoices => invoices.find(invoice => invoice.id === id))
    );
  }
}