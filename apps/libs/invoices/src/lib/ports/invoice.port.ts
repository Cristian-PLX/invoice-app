import { Observable } from 'rxjs';
import { Invoice } from '../domain/models/invoice.interface';
import { Pagination } from '@org/shared';

export interface InvoiceRepository {
  getInvoices(pagination: Pagination): Observable<Invoice[]>;
}
