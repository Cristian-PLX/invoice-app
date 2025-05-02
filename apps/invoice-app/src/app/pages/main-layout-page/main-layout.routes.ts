import { Route } from '@angular/router';
import { LAYOUT_CONSTANTS } from '@org/shared';

import { MainLayoutComponent } from './main-layout.component';

export const appRoutes: Route[] = [
  {
    path: LAYOUT_CONSTANTS.ROUTING.VIEW.ROOT,
    component: MainLayoutComponent,
    providers: [
      {
        provide: LAYOUT_CONSTANTS,
        useValue: LAYOUT_CONSTANTS,
      },
    ],
    children: [
      {
        path: LAYOUT_CONSTANTS.ROUTING.VIEW.ROOT,
        pathMatch: 'full',
        loadComponent: () =>
          import('../home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: LAYOUT_CONSTANTS.ROUTING.VIEW.INVOICES,
        loadChildren: () =>
          import('@org/invoices').then((m) => m.invoicesRoutes),
      },
    ],
  },
];
