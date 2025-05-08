import { InjectionToken } from "@angular/core";

export const IMAGE_PATH = './images';

export interface AppConfig {
  IMAGE_PATH: string;
  ROUTING: {
    VIEW: {
      ROOT: string;
    };
  };
}

export const APP_CONSTANTS: AppConfig = {
  IMAGE_PATH: `${IMAGE_PATH}/{imageName}.{extension}`,
  ROUTING: {
    VIEW: {
      ROOT: '',
    },
  },
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
