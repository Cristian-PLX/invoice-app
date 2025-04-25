import { Component, signal, effect, inject, OnInit } from '@angular/core';
import { ScrollerLazyLoadEvent, ScrollerModule } from 'primeng/scroller';
import { InvoiceManager } from '../../../application/usecases/invoice.manager';
import { InvoicesListStoreSelectorsService } from '../../../application/store/invoices';
import { Invoice } from '../../../domain/models/invoice.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-invoices-list-template',
  templateUrl: './invoices-list-template.component.html',
  imports: [CommonModule, ScrollerModule],
  standalone: true,
})
export class InvoicesListTemplateComponent implements OnInit {
  private invoiceManager = inject(InvoiceManager);
  private invoiceStoreSelector = inject(InvoicesListStoreSelectorsService);

  protected pending = this.invoiceStoreSelector.pending;
  protected invoices = this.invoiceStoreSelector.invoices;

  protected virtualItems = signal<Invoice[]>([]);
  private loadedPages = new Set<number>();
  private readonly pageSize = 2;
  private currentPage = 0;

  ngOnInit(): void {
    this.invoiceManager.loadInvoices({
      pageIndex: this.currentPage,
      pageSize: this.pageSize,
    });
  }

  constructor() {
    effect(() => {
      console.log('Invoices', this.invoices());
    });

    effect(() => {
      const newData = this.invoices();
      if (newData.length > 0) {
        this.updateVirtualItems(newData);
      }
    });
  }

  private updateVirtualItems(newData: Invoice[]) {
    this.virtualItems.update((current) => {
      const updated = [...current];
      const startIndex = this.currentPage * this.pageSize;

      newData.forEach((item, i) => {
        updated[startIndex + i] = item;
      });

      return updated;
    });
  }

  protected onLazyLoad(event: ScrollerLazyLoadEvent) {
    console.log('Lazy load event:', event);

    const pageToLoad = Math.floor(event.first / this.pageSize);

    if (!this.loadedPages.has(pageToLoad)) {
      this.loadedPages.add(pageToLoad);
      this.invoiceManager.loadInvoices({
        pageIndex: pageToLoad,
        pageSize: this.pageSize,
      });
    }
  }
}
