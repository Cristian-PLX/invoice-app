import {
  InvoicesListStoreActionsService,
  InvoicesListStoreSelectorsService,
  InvoicesStoreActionsService,
  InvoicesStoreSelectorsService,
} from '../../application/store/invoices';
import { InvoicesListStore } from '../../application/store/invoices/invoices-list.store';
import { InvoicesStore } from '../../application/store/invoices/invoices.store';
import { InvoicesListManager } from '../usecases/invoices-list.manager';
import { InvoicesManager } from '../usecases/invoices.manager';

export const INVOICES_LIST_PROVIDERS = [
  InvoicesListManager,
  InvoicesListStore,
  InvoicesListStoreActionsService,
  InvoicesListStoreSelectorsService,
];

export const INVOICES_PROVIDERS = [
  InvoicesManager,
  InvoicesStore,
  InvoicesStoreActionsService,
  InvoicesStoreSelectorsService,
];
