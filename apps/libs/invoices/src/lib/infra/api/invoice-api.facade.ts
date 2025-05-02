import { inject, Injectable } from '@angular/core';
import {
  InvoicesListStoreActionsService,
  InvoicesListStoreSelectorsService,
} from '../../application/store/invoices';
import { InvoiceRange } from '@org/shared';

@Injectable()
export class InvoiceApiFacade {
  private invoiceActions = inject(InvoicesListStoreActionsService);
  private invoiceSelectors = inject(InvoicesListStoreSelectorsService);

  pending = this.invoiceSelectors.pending;
  invoices = this.invoiceSelectors.invoices;

  loadInvoices(invoiceRange: InvoiceRange) {
    this.invoiceActions.loadInvoicesList(invoiceRange);
  }
}
