import { ComponentStore } from '@ngrx/component-store';
import { tapResponse } from '@ngrx/operators';
import { inject, Injectable } from '@angular/core';
import { InvoicesState } from '../../models/invoices.state';
import { exhaustMap, Observable, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Invoice } from '../../../domain/models/invoice.interface';
import { INVOICE_REPOSITORY } from '../../../ports/invoice.port.token';
import { InvoiceRange } from '@org/shared';
import { SearchResult } from '../../../domain/models/search-result.interface';

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
  totalElements = this.selectSignal((state) => state.totalElements);
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

  loadInvoicesList = this.effect((trigger$: Observable<InvoiceRange>) =>
    trigger$.pipe(
      tap(() => {
        this.reducers.startLoadingInvoicesList();
      }),
      exhaustMap((invoiceRange: InvoiceRange) =>
        this.invoiceRepository.getInvoiceResults(invoiceRange).pipe(
          tapResponse(
            (result: SearchResult<Invoice>) => {
              this.reducers.invoicesLazyListLoaded({ result, invoiceRange });
            },
            (error: HttpErrorResponse) => {
              console.error('Error loading invoices:', error);
              this.reducers.stopLoadingInvoicesList();
            }
          )
        )
      )
    )
  );

  private reducers = {
    startLoadingInvoicesList: this.updater((state) => ({
      ...state,
      pending: true,
    })),
    stopLoadingInvoicesList: this.updater((state) => ({
      ...state,
      pending: false,
    })),
    invoicesLazyListLoaded: this.updater(
      (
        state,
        {
          result,
          invoiceRange,
        }: { result: SearchResult<Invoice>; invoiceRange: InvoiceRange }
      ) => {
        const requiredInvoices = [...result.data];
        const total = result.total;
        const { startIndex, endIndex } = invoiceRange;

        let lazyInvoices = [...state.data];
        if (!lazyInvoices.length && total) {
          lazyInvoices = Array(total).fill(null);
        }

        for (let i = startIndex, x = 0; i < endIndex; i++, x++) {
          lazyInvoices[i] = requiredInvoices[x];
        }

        return {
          ...state,
          data: lazyInvoices,
          totalElements: total,
          pending: false,
        };
      }
    ),
    invoicesListLoaded: this.updater((state, result: SearchResult<Invoice>) => {
      return {
        ...state,
        data: result.data,
        totalElements: result.total,
        pending: false,
      };
    }),
  };
}
