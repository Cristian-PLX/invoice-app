import { InjectionToken } from '@angular/core';

export const IMAGE_PATH = './images';

export interface CoreConfig {
  IMAGE_PATH: string;
  ROUTING: {
    VIEW: {
      ROOT: string;
    };
  };
}

export const CORE_CONSTANTS: CoreConfig = {
  IMAGE_PATH: `${IMAGE_PATH}/{imageName}.{extension}`,
  ROUTING: {
    VIEW: {
      ROOT: '',
    },
  },
} as const;

export const CORE_CONFIG = new InjectionToken<CoreConfig>('app.config');
