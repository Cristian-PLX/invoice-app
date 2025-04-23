import {
  InvoicesListStoreActionsService,
  InvoicesListStoreSelectorsService,
} from '../../application/store/invoices';
import { InvoicesListStore } from '../../application/store/invoices/invoices-list.store';
import { InvoiceApiFacade } from './invoice-api.facade';

export const INVOICE_API_PROVIDERS = [
  InvoiceApiFacade,
  InvoicesListStore,
  InvoicesListStoreActionsService,
  InvoicesListStoreSelectorsService,
];
