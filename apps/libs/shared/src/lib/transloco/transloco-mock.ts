import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';


export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  const { langs, translocoConfig, ...rest} = options;
  return TranslocoTestingModule.forRoot({
    langs: {
      ...langs,
    },
    translocoConfig: {
      availableLangs: ['en', 'es', 'cat'],
      defaultLang: 'en',
      reRenderOnLangChange: true,
      ...translocoConfig,
    },
    ...rest,
  });
}
