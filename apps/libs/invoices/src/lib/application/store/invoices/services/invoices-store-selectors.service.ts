import { inject, Injectable } from '@angular/core';
import { InvoicesStore } from '../invoices.store';

@Injectable()
export class InvoicesStoreSelectorsService {
  private store = inject(InvoicesStore);

  loading$ = this.store.loading$;
  invoice = this.store.invoice;
  pending = this.store.pending;
  error = this.store.error;
}
