import { inject, Injectable } from '@angular/core';
import { InvoicesStoreActionsService } from '../store/invoices';

@Injectable()
export class InvoicesManager {
  private invoicesStoreActionsService = inject(InvoicesStoreActionsService);

  getInvoiceById(invoiceId: string) {
    this.invoicesStoreActionsService.getInvoiceById(invoiceId);
  }
}
