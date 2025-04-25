import { inject, Injectable } from '@angular/core';
import {
  InvoicesListStoreActionsService,
  InvoicesListStoreSelectorsService,
} from '../../application/store/invoices';
import { Pagination } from '@org/shared';

@Injectable()
export class InvoiceApiFacade {
  private invoiceActions = inject(InvoicesListStoreActionsService);
  private invoiceSelectors = inject(InvoicesListStoreSelectorsService);

  pending = this.invoiceSelectors.pending;
  invoices = this.invoiceSelectors.invoices;

  loadInvoices(pagination: Pagination) {
    this.invoiceActions.loadInvoicesList(pagination);
  }
}
