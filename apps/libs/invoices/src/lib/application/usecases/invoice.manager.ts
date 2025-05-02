import { inject, Injectable } from '@angular/core';
import { InvoicesListStoreActionsService } from '../store/invoices';
import { InvoiceRange } from '@org/shared';

@Injectable()
export class InvoiceManager {
  private invoiceListStoreActionsService = inject(
    InvoicesListStoreActionsService
  );

  loadInvoices(invoiceRange: InvoiceRange) {
    this.invoiceListStoreActionsService.loadInvoicesList(invoiceRange);
  }
}
