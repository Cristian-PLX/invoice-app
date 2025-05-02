import { inject, Injectable } from '@angular/core';
import { InvoicesListStore } from '../invoices-list.store';
import { InvoiceRange } from '@org/shared';

@Injectable()
export class InvoicesListStoreActionsService {
  private store = inject(InvoicesListStore);

  loadInvoicesList(invoiceRange: InvoiceRange): void {
    this.store.loadInvoicesList(invoiceRange);
  }
}
