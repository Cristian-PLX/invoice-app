import { inject, Injectable } from '@angular/core';
import { InvoicesListStore } from '../invoices-list.store';
import { Pagination } from '@org/shared';

@Injectable()
export class InvoicesListStoreActionsService {
  private store = inject(InvoicesListStore);

  loadInvoicesList(pagination: Pagination): void {
    this.store.loadInvoicesList(pagination);
  }
}
