import {
  Component,
  signal,
  inject,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  ScrollerModule,
  ScrollerScrollIndexChangeEvent,
} from 'primeng/scroller';
import { InvoicesListManager } from '../../../application/usecases/invoices-list.manager';
import { InvoicesListStoreSelectorsService } from '../../../application/store/invoices';
import { Invoice } from '../../../domain/models/invoice.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-invoices-list-template',
  templateUrl: './invoices-list-template.component.html',
  imports: [CommonModule, ScrollerModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoicesListTemplateComponent implements OnInit {
  private invoiceManager = inject(InvoicesListManager);
  private invoiceStoreSelector = inject(InvoicesListStoreSelectorsService);

  protected pending = this.invoiceStoreSelector.pending;
  protected invoices = this.invoiceStoreSelector.invoices;
  protected totalElements = this.invoiceStoreSelector.totalElements;

  protected readonly loadSize = 8;
  protected virtualItems = signal<(Invoice | null)[]>([]);

  ngOnInit(): void {
    this.invoiceManager.loadInvoices({
      startIndex: 0,
      endIndex: this.loadSize - 1,
    });
  }

  protected onLazyLoad({ first, last }: ScrollerScrollIndexChangeEvent) {
    this.invoiceManager.loadInvoices({
      startIndex: first,
      endIndex: last,
    });
  }
}
