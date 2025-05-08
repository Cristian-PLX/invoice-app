import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import invoicesMock from '../mocks/invoices-100-mock.json' assert { type: 'json' };
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../../domain/models/invoice.interface';
import { InvoiceRepository } from '../../ports/invoice.port';
import { InvoiceRange } from '@org/shared';
import { SearchResult } from '../../domain/models/search-result.interface';

@Injectable({
  providedIn: 'root',
})
export class InvoiceHttpRepository implements InvoiceRepository {
  //private http = inject(HttpClient);
  // TODO: Uncomment the line above and remove the mock data when the API is ready

  getInvoices(invoiceRange: InvoiceRange): Observable<Invoice[]> {
    const { startIndex, endIndex } = invoiceRange;

    const start = startIndex * endIndex;
    const end = start + endIndex;

    const paginatedData: Invoice[] = invoicesMock
      .slice(start, end)
      .map((invoice) => ({
        ...invoice,
        paymentDue: new Date(invoice.paymentDue),
      }));

    return of(paginatedData);
  }

  getInvoiceResults(
    invoiceRange: InvoiceRange
  ): Observable<SearchResult<Invoice>> {
    const { startIndex, endIndex } = invoiceRange;

    const paginatedData: Invoice[] = invoicesMock
      .slice(startIndex, endIndex)
      .map((invoice) => ({
        ...invoice,
        paymentDue: new Date(invoice.paymentDue),
      }));

    const result: SearchResult<Invoice> = {
      total: invoicesMock.length,
      data: paginatedData,
    };

    return of(result).pipe(delay(1000));
  }

  getInvoiceById(invoiceId: string): Observable<Invoice> {
    let invoice = invoicesMock
      .map((invoice) => ({
        ...invoice,
        paymentDue: new Date(invoice.paymentDue),
      }))
      .find((invoice) => invoice.id === invoiceId);

    if (!invoice) {
      throw new Error('Invoice not found');
    }

    invoice = {
      ...invoice,
      paymentDue: new Date(invoice.paymentDue),
    };

    return of(invoice).pipe(delay(1000));
  }
}
