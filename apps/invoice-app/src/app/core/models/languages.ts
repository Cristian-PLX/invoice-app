export enum Languages {
  CAT = 'cat',
  EN = 'en',
  ES = 'es',
}
export type TranslocoLanguage = keyof Record<Languages, string>;

export enum TranslocoScopes {
  COMMON = 'common',
  NOT_FOUND = 'not-found',
}
