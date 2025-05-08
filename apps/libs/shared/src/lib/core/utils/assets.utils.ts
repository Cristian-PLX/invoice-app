import { inject } from '@angular/core';

import { CORE_CONFIG } from '../';
import { Image } from '../enums';

export class AssetsUtils {
  static getImageUrl(imageName: Image, extension: string): string {
    const coreConfig = inject(CORE_CONFIG);

    return coreConfig.IMAGE_PATH.replace('{imageName}', imageName).replace(
      '{extension}',
      extension
    );
  }
}
