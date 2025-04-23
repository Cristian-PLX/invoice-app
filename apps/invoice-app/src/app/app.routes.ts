import { Route } from '@angular/router';
import { APP_CONSTANTS } from '@org/shared';

export const appRoutes: Route[] = [
  {
    path: APP_CONSTANTS.ROUTING.VIEW.ROOT,
    loadChildren: () =>
      import('./pages/main-layout-page/main-layout.routes').then(
        (m) => m.appRoutes
      ),
  },
];
