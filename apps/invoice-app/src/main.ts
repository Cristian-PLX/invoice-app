import { registerLocaleData } from '@angular/common';
import localeCa from '@angular/common/locales/en';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/en';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MAIN_CONFIG, MAIN_CONSTANTS } from './main.config';
import { CORE_CONFIG, CORE_CONSTANTS } from '@org/shared';
import { isDevMode, LOCALE_ID } from '@angular/core';
import invoicesAppPrimeNgPreset from './invoices-app-primeng-presets';
import { providePrimeNG } from 'primeng/config';
import { APP_CONSTANTS } from './app/app.config';
import { TranslocoHttpLoader } from './app/transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localeCa);
registerLocaleData(localeEn);
registerLocaleData(localeEs);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: MAIN_CONFIG, useValue: MAIN_CONSTANTS },
    { provide: CORE_CONFIG, useValue: CORE_CONSTANTS },
    { provide: LOCALE_ID, useValue: MAIN_CONSTANTS.APP_CONFIG.DEFAULT_LOCALE },
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: invoicesAppPrimeNgPreset,
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities',
          },
        },
      },
    }),
    provideTransloco({
      config: {
        availableLangs: [...APP_CONSTANTS.LANGUAGE.AVAILABLE_LANGUAGES],
        defaultLang: APP_CONSTANTS.LANGUAGE.DEFAULT_LANGUAGE,
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
}).catch((err) => console.error(err));
