import { Route } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { InvoiceListComponent, InvoiceDetailComponent } from '@org/ui';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: InvoiceListComponent,
      },
      {
        path: 'invoice/:id',
        component: InvoiceDetailComponent,
      },
    ],
  },
];
