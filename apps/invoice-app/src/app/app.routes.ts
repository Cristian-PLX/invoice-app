import { Route } from '@angular/router';
import { LAYOUT_CONSTANTS } from '@org/shared';

import { provideTranslocoScope } from '@jsverse/transloco';
import { TranslocoScopes } from './core/models/languages';
import { APP_CONSTANTS } from './app.config';

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
    providers: [
      provideTranslocoScope(TranslocoScopes.NOT_FOUND, {
        scope: TranslocoScopes.NOT_FOUND,
        alias: TranslocoScopes.NOT_FOUND,
      }),
    ],
  },
  {
    path: '**',
    redirectTo: LAYOUT_CONSTANTS.ROUTING.VIEW.NOT_FOUND,
  },
];
