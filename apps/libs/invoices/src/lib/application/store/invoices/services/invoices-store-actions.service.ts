import { Injectable, inject } from '@angular/core';
import { InvoicesStore } from '../invoices.store';

@Injectable()
export class InvoicesStoreActionsService {
  private store = inject(InvoicesStore);

  getInvoiceById(invoiceId: string): void {
    this.store.loadInvoice(invoiceId);
  }
}
