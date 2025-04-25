import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import invoicesMock from '../mocks/invoices-mock.json' assert { type: 'json' };
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../../domain/models/invoice.interface';
import { InvoiceRepository } from '../../ports/invoice.port';
import { Pagination } from '@org/shared';

@Injectable({
  providedIn: 'root',
})
export class InvoiceHttpRepository implements InvoiceRepository {
  //private http = inject(HttpClient);
  // TODO: Uncomment the line above and remove the mock data when the API is ready

  getInvoices(pagination: Pagination): Observable<Invoice[]> {
    const { pageIndex, pageSize } = pagination;

    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedData: Invoice[] = invoicesMock
      .slice(startIndex, endIndex)
      .map((invoice) => ({
        ...invoice,
        paymentDue: new Date(invoice.paymentDue),
      }));

    return of(paginatedData);
  }
}
