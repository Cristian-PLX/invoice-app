import { InjectionToken } from '@angular/core';
import { Languages, TranslocoLanguage } from './core/models/languages';
export interface AppConfig {
  ROUTING: {
    VIEW: {
      ROOT: string;
    };
  };
  LANGUAGE: {
    AVAILABLE_LANGUAGES: readonly TranslocoLanguage[];
    DEFAULT_LANGUAGE: TranslocoLanguage;
    FALLBACK_LANGUAGES: Map<TranslocoLanguage, TranslocoLanguage>;
  };
}

export const AVAILABLE_LANGUAGES = [
  Languages.EN,
  Languages.ES,
  Languages.CAT,
] as const;

export const APP_CONSTANTS: AppConfig = {
  ROUTING: {
    VIEW: {
      ROOT: '',
    },
  },
  LANGUAGE: {
    AVAILABLE_LANGUAGES: AVAILABLE_LANGUAGES,
    DEFAULT_LANGUAGE: AVAILABLE_LANGUAGES[0],
    FALLBACK_LANGUAGES: new Map<TranslocoLanguage, TranslocoLanguage>().set(
      AVAILABLE_LANGUAGES[0],
      AVAILABLE_LANGUAGES[0]
    ),
  },
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
