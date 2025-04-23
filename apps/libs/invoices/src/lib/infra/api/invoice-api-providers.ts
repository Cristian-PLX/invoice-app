import {
  InvoicesListStoreActionsService,
  InvoicesListStoreSelectorsService,
} from '../../application/store/invoices';
import { InvoicesListStore } from '../../application/store/invoices/invoices-list.store';
import { InvoiceManager } from '../../application/usecases/invoice.manager';

export const INVOICE_API_PROVIDERS = [
  InvoiceManager,
  InvoicesListStore,
  InvoicesListStoreActionsService,
  InvoicesListStoreSelectorsService,
];
