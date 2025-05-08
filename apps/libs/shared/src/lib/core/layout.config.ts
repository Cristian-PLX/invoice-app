import { InjectionToken } from '@angular/core';

export const LAYOUT_CONSTANTS = {
  ROUTING: {
    VIEW: {
      BLANK: '',
      ROOT: '',
      LOGIN: 'login',
      INVOICES: 'invoices',
      USERS: 'users',
      DOCUMENTS: 'documents',
      SETTINGS: 'settings',
      ROLES: 'roles',
      NOTIFICATIONS: 'notifications',
      NOT_FOUND: '404',
    },
    PARTS: { EDITION: 'edition', REGISTRATION: 'registration' },
    LANGUAGES: [
      { label: 'CA', code: 'ca' },
      { label: 'EN', code: 'en' },
      { label: 'ES', code: 'es' },
    ],
  },
} as const;
export const LAYOUT_CONFIG = new InjectionToken<typeof LAYOUT_CONSTANTS>(
  'layout.config'
);
