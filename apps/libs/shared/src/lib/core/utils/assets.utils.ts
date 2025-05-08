import { inject } from '@angular/core';

import { APP_CONFIG} from '../';
import { Image } from '../enums';

export class AssetsUtils {
  static getImageUrl(imageName: Image, extension:string): string {
    const appConfig = inject(APP_CONFIG);

    return appConfig.IMAGE_PATH
      .replace('{imageName}', imageName)
      .replace('{extension}', extension);
  }
}

