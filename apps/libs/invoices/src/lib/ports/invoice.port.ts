import { Observable } from 'rxjs';
import { Invoice } from '../domain/models/invoice.interface';
import { InvoiceRange } from '@org/shared';
import { SearchResult } from '../domain/models/search-result.interface';

export interface InvoiceRepository {
  getInvoices(invoiceRange: InvoiceRange): Observable<Invoice[]>;
  getInvoiceResults(
    invoiceRange: InvoiceRange
  ): Observable<SearchResult<Invoice>>;
  getInvoiceById(invoiceId: string): Observable<Invoice>;
}
