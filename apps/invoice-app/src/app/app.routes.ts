import { Route } from '@angular/router';
import { APP_CONSTANTS, LAYOUT_CONSTANTS } from '@org/shared';

export const appRoutes: Route[] = [
  {
    path: APP_CONSTANTS.ROUTING.VIEW.ROOT,
    loadChildren: () =>
      import('./pages/main-layout-page/main-layout.routes').then(
        (m) => m.appRoutes
      ),
  },
  {
    path: LAYOUT_CONSTANTS.ROUTING.VIEW.NOT_FOUND,
    loadComponent: () =>
      import('./pages/not-found-page/not-found-page.component').then(
        (c) => c.NotFoundPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: LAYOUT_CONSTANTS.ROUTING.VIEW.NOT_FOUND,
  },
];
