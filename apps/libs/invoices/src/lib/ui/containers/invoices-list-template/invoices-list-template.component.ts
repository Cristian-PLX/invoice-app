import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceManager } from '../../../application/usecases/invoice.manager';
import { InvoiceApiFacade } from '../../../infra/api';

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
  private invoiceApiFacade = inject(InvoiceApiFacade);
  protected invoices = this.invoiceApiFacade.invoices;
  constructor() {
    effect(() => {
      this.invoiceManager.loadInvoices();
    });
  }
}
