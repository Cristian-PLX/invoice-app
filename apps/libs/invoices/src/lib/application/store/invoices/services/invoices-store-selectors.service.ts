import { inject, Injectable } from '@angular/core';
import { InvoicesListStore } from '../invoices-list.store';

@Injectable()
export class InvoicesListStoreSelectorsService {
  private store = inject(InvoicesListStore);

  loading$ = this.store.loading$;
  invoices = this.store.data;
  pending = this.store.pending;
  error = this.store.error;
  tableData$ = this.store.tableData$;
}
