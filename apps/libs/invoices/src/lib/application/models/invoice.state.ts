import { Invoice } from '../../domain/models/invoice.interface';

export interface InvoiceState {
  invoice: Invoice | null;
  pending: boolean;
  pendingSave: boolean;
  pendingDelete: boolean;
  isError: boolean;
}
