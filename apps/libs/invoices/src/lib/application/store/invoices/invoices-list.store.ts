import { ComponentStore } from '@ngrx/component-store';
import { tapResponse } from '@ngrx/operators';
import { inject, Injectable } from '@angular/core';
import { InvoicesState } from '../../models/invoices.state';
import { EMPTY, exhaustMap, Observable, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Invoice } from '../../../domain/models/invoice.interface';
import { INVOICE_REPOSITORY } from '../../../ports/invoice.port.token';

const initialState: InvoicesState = {
  pending: false,
  isError: false,
  data: [],
  dataFiltered: [],
  pageIndex: 0,
  pageSize: 10,
  totalElements: 0,
  sortBy: 'publishDate',
  sortDir: 'desc',
};

@Injectable()
export class InvoicesListStore extends ComponentStore<InvoicesState> {
  private invoiceRepository = inject(INVOICE_REPOSITORY);

  loading$ = this.select((state) => state.pending);
  pending = this.selectSignal((state) => state.pending);
  error = this.selectSignal((state) => state.isError);
  data = this.selectSignal((state) => state.data);
  dataFiltered = this.selectSignal((state) => state.dataFiltered);
  tableData$ = this.select((state) => ({
    data: state.data,
    pageIndex: state.pageIndex,
    pageSize: state.pageSize,
    totalElements: state.totalElements,
  }));

  constructor() {
    super(initialState);
  }

  loadInvoicesList = this.effect((trigger$: Observable<void>) =>
    trigger$.pipe(
      tap(() => this.reducers.startLoadingInvoicesList()),
      exhaustMap(() =>
        this.invoiceRepository.getInvoices().pipe(
          tapResponse(
            (invoices: Invoice[]) => this.reducers.invoicesListLoaded(invoices),
            (error: HttpErrorResponse) => {
              console.error('Error loading invoices:', error);
              return EMPTY;
            }
          )
        )
      )
    )
  );

  private reducers = {
    startLoadingInvoicesList: this.updater((state) => ({
      ...state,
      isDownloading: true,
    })),
    invoicesListLoaded: this.updater((state, invoices: Invoice[]) => {
      return {
        ...state,
        data: invoices,
        isDownloading: false,
      };
    }),
  };
}
