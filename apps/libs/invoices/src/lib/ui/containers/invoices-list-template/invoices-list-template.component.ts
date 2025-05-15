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
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

import { InvoicesListManager } from '../../../application/usecases/invoices-list.manager';
import { InvoicesListStoreSelectorsService } from '../../../application/store/invoices';
import { Invoice } from '../../../domain/models/invoice.interface';
import { InvoiceStatus } from '@org/shared';

@Component({
  selector: 'lib-invoices-list-template',
  templateUrl: './invoices-list-template.component.html',
  styleUrls: ['./invoices-list-template.component.css'],
  imports: [CommonModule, ScrollerModule, ButtonModule, TagModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoicesListTemplateComponent implements OnInit {
  private invoiceManager = inject(InvoicesListManager);
  private invoiceStoreSelector = inject(InvoicesListStoreSelectorsService);

  protected pending = this.invoiceStoreSelector.pending;
  protected invoices = this.invoiceStoreSelector.invoices;
  protected totalElements = this.invoiceStoreSelector.totalElements;

  protected readonly loadSize = 20;
  protected virtualItems = signal<(Invoice | null)[]>([]);

  protected readonly INVOICE_STATUS = InvoiceStatus;

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
