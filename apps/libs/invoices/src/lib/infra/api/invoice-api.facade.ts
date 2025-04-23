import { inject, Injectable } from '@angular/core';
import {
  InvoicesListStoreActionsService,
  InvoicesListStoreSelectorsService,
} from '../../application/store/invoices';

@Injectable()
export class InvoiceApiFacade {
  private invoiceActions = inject(InvoicesListStoreActionsService);
  private invoiceSelectors = inject(InvoicesListStoreSelectorsService);

  pending = this.invoiceSelectors.pending;
  invoices = this.invoiceSelectors.invoices;

  loadInvoices() {
    this.invoiceActions.loadInvoicesList();
  }
}
