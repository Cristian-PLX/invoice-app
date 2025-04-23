import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceManager } from '../../../application/usecases/invoice.manager';
import { InvoicesListStoreSelectorsService } from '../../../application/store/invoices';

@Component({
  selector: 'lib-invoices-list-template',
  imports: [CommonModule],
  templateUrl: './invoices-list-template.component.html',
  styleUrl: './invoices-list-template.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoicesListTemplateComponent {
  private invoiceManager = inject(InvoiceManager);
  private invoiceStoreSelector = inject(InvoicesListStoreSelectorsService);

  protected invoices = this.invoiceStoreSelector.invoices;

  constructor() {
    effect(() => {
      this.invoiceManager.loadInvoices();
    });
  }
}
