import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Invoice } from '@org/core';


@Component({
  selector: 'lib-invoice-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css',
})
export class InvoiceListComponent {
  @Input() invoices: Invoice[] = [];
}
