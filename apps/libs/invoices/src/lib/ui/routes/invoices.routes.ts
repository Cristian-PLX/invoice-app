import { Route } from '@angular/router';
import { INVOICES_PAGE_CONSTANTS } from '../config';
import {
  INVOICES_LIST_PROVIDERS,
  INVOICES_PROVIDERS,
} from '../../application/providers/invoices-providers';

export const invoicesRoutes: Route[] = [
  {
    path: INVOICES_PAGE_CONSTANTS.ROUTING.VIEW.ROOT,
    children: [
      {
        path: INVOICES_PAGE_CONSTANTS.ROUTING.VIEW.LIST,
        providers: [...INVOICES_LIST_PROVIDERS],
        loadComponent: () =>
          import(
            '../containers/invoices-list-template/invoices-list-template.component'
          ).then((c) => c.InvoicesListTemplateComponent),
      },
      {
        path: INVOICES_PAGE_CONSTANTS.ROUTING.VIEW.DETAIL,
        providers: [...INVOICES_PROVIDERS],
        loadComponent: () =>
          import(
            '../containers/invoices-detail-template/invoices-detail-template.component'
          ).then((c) => c.InvoicesDetailTemplateComponent),
      },
    ],
  },
];
