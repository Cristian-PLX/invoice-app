import { InjectionToken } from '@angular/core';
import { Languages, TranslocoLanguage } from './app/core/models/languages';

export interface MainConfig {
  APP_CONFIG: {
    DEFAULT_LOCALE: TranslocoLanguage;
  };
}

export const MAIN_CONSTANTS: MainConfig = {
  APP_CONFIG: {
    DEFAULT_LOCALE: Languages.ES,
  },
};

export const MAIN_CONFIG = new InjectionToken<MainConfig>('main.config');
