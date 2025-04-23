import { Observable } from 'rxjs';
import { Invoice } from '../domain/models/invoice.interface';

export interface InvoiceRepository {
  getInvoices(): Observable<Invoice[]>;
}
