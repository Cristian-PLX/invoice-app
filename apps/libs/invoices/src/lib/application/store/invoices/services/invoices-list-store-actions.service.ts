import { inject, Injectable } from '@angular/core';
import { InvoicesListStore } from '../invoices-list.store';

@Injectable()
export class InvoicesListStoreActionsService {
  private store = inject(InvoicesListStore);

  loadInvoicesList(): void {
    this.store.loadInvoicesList();
  }
}
