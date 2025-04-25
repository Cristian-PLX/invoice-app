import { inject, Injectable } from '@angular/core';
import { InvoicesListStoreActionsService } from '../store/invoices';
import { Pagination } from '@org/shared';

@Injectable()
export class InvoiceManager {
  private invoiceListStoreActionsService = inject(
    InvoicesListStoreActionsService
  );

  loadInvoices(pagination: Pagination) {
    this.invoiceListStoreActionsService.loadInvoicesList(pagination);
  }
}
