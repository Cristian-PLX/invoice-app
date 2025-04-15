import { InvoiceListComponent } from '@org/ui';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Invoice } from '@org/core';
import { CommonModule } from '@angular/common';
import { InvoiceService } from '@org/data-access';
import { HttpClientModule } from '@angular/common/http';

@Component({
  imports: [CommonModule, HttpClientModule ,InvoiceListComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'invoice-app';

  invoices: Invoice[] = [];

  constructor(private invoiceData: InvoiceService) {}

  ngOnInit(): void {
    this.invoiceData.getInvoices().subscribe( data => {
      this.invoices = data;
      console.log(this.invoices);
    })
  }
}
