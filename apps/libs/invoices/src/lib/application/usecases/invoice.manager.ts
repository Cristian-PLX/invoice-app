import { inject, Injectable } from '@angular/core';
import { InvoiceApiFacade } from '../../infra/api';

@Injectable()
export class InvoiceManager {
  private invoiceApiFacade = inject(InvoiceApiFacade);

  loadInvoices() {
    this.invoiceApiFacade.loadInvoices();
  }
}
