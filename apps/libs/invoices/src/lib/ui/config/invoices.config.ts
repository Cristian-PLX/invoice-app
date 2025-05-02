import { LAYOUT_CONSTANTS } from '@org/shared';

export const INVOICES_PAGE_CONSTANTS = {
  ROUTING: {
    VIEW: {
      ABS_ROOT: [
        LAYOUT_CONSTANTS.ROUTING.VIEW.ROOT,
        LAYOUT_CONSTANTS.ROUTING.VIEW.INVOICES,
      ],
      ROOT: '',
      LIST: '',
      DETAIL: ':invoiceCode',
      EDITION: 'edition',
      REGISTRATION: 'registration',
    },
  },
} as const;
