import { ComponentStore } from '@ngrx/component-store';
import { tapResponse } from '@ngrx/operators';
import { inject, Injectable } from '@angular/core';
import { exhaustMap, Observable, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Invoice } from '../../../domain/models/invoice.interface';
import { INVOICE_REPOSITORY } from '../../../ports/invoice.port.token';
import { InvoiceState } from '../../models/invoice.state';

const initialState: InvoiceState = {
  invoice: null,
  pending: false,
  pendingSave: false,
  pendingDelete: false,
  isError: false,
};

@Injectable()
export class InvoicesStore extends ComponentStore<InvoiceState> {
  private invoiceRepository = inject(INVOICE_REPOSITORY);

  invoice = this.selectSignal((state) => state.invoice);
  loading$ = this.select((state) => state.pending);
  pending = this.selectSignal((state) => state.pending);
  error = this.selectSignal((state) => state.isError);

  constructor() {
    super(initialState);
  }

  loadInvoice = this.effect((trigger$: Observable<string>) =>
    trigger$.pipe(
      tap(() => {
        this.reducers.startLoadingInvoice();
      }),
      exhaustMap((invoiceId: string) =>
        this.invoiceRepository.getInvoiceById(invoiceId).pipe(
          tapResponse(
            (invoice: Invoice) => {
              this.reducers.invoiceLoaded(invoice);
            },
            (error: HttpErrorResponse) => {
              console.error('Error loading invoices:', error);
              this.reducers.stopLoadingInvoice();
            }
          )
        )
      )
    )
  );

  private reducers = {
    startLoadingInvoice: this.updater((state) => ({
      ...state,
      pending: true,
    })),
    stopLoadingInvoice: this.updater((state) => ({
      ...state,
      pending: false,
    })),
    invoiceLoaded: this.updater((state, invoice: Invoice) => ({
      ...state,
      invoice,
      pending: false,
    })),
  };
}
