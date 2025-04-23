import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import invoicesMock from '../mocks/invoices-mock.json' assert { type: 'json' };
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../../domain/models/invoice.interface';
import { InvoiceRepository } from '../../ports/invoice.port';

@Injectable({
  providedIn: 'root',
})
export class InvoiceHttpRepository implements InvoiceRepository {
  //private http = inject(HttpClient);
  // TODO: Uncomment the line above and remove the mock data when the API is ready

  getInvoices(): Observable<Invoice[]> {
    const data: Invoice[] = invoicesMock.map((invoice) => ({
      ...invoice,
      paymentDue: new Date(invoice.paymentDue),
    }));

    return of(data).pipe(delay(1500));
  }
}
