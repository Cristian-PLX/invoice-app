import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesManager } from '../../../application/usecases/invoices.manager';
import { InvoicesStoreSelectorsService } from '../../../application/store/invoices';

@Component({
  selector: 'lib-invoices-detail-template',
  imports: [CommonModule],
  templateUrl: './invoices-detail-template.component.html',
  styleUrl: './invoices-detail-template.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoicesDetailTemplateComponent {
  invoiceCode = input.required<string>();

  private invoiceManager = inject(InvoicesManager);
  private invoiceStoreSelector = inject(InvoicesStoreSelectorsService);

  protected pending = this.invoiceStoreSelector.pending;
  protected invoice = this.invoiceStoreSelector.invoice;

  constructor() {
    effect(() => {
      this.invoiceManager.getInvoiceById(this.invoiceCode());
    });
  }
}
