import { inject, Injectable } from '@angular/core';
import { InvoicesListStoreActionsService } from '../store/invoices';

@Injectable()
export class InvoiceManager {
  private invoiceListStoreActionsService = inject(
    InvoicesListStoreActionsService
  );

  loadInvoices() {
    this.invoiceListStoreActionsService.loadInvoicesList();
  }
}
