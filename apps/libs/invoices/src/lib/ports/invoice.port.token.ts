import { inject, InjectionToken } from '@angular/core';
import { InvoiceRepository } from './invoice.port';
import { InvoiceHttpRepository } from '../infra/repositories/invoice-http.repository';

export const CART_REPOSITORY = new InjectionToken<InvoiceRepository>(
  'InvoiceRepository',
  {
    providedIn: 'root',
    factory: () => inject(InvoiceHttpRepository),
  }
);
