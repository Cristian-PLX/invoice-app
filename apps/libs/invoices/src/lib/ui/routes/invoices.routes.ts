import { Route } from '@angular/router';
import { INVOICES_PAGE_CONSTANTS } from '../config';
import { InvoiceManager } from '../../application/usecases/invoice.manager';
import { INVOICE_API_PROVIDERS } from '../../infra/api';

export const invoicesRoutes: Route[] = [
  {
    path: INVOICES_PAGE_CONSTANTS.ROUTING.VIEW.ROOT,
    providers: [
      { useClass: InvoiceManager, provide: InvoiceManager },
      ...INVOICE_API_PROVIDERS,
    ],
    children: [
      {
        path: INVOICES_PAGE_CONSTANTS.ROUTING.VIEW.LIST,
        loadComponent: () =>
          import(
            '../containers/invoices-list-template/invoices-list-template.component'
          ).then((c) => c.InvoicesListTemplateComponent),
      },
      {
        path: INVOICES_PAGE_CONSTANTS.ROUTING.VIEW.DETAIL,
        loadComponent: () =>
          import(
            '../containers/invoices-detail-template/invoices-detail-template.component'
          ).then((c) => c.InvoicesDetailTemplateComponent),
      },
    ],
  },
];
