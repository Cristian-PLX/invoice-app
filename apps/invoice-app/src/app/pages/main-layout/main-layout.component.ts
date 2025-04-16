import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Invoice } from '@org/core';
import { InvoiceService } from '@org/data-access';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@org/ui';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent implements OnInit {
  invoices: Invoice[] = [];

  constructor(private invoiceData: InvoiceService) {}

  ngOnInit(): void {
    this.invoiceData.getInvoices().subscribe((data) => {
      this.invoices = data;
      console.log(this.invoices);
    });
  }
}
