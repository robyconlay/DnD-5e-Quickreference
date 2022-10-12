export interface Language {
  locale: string;
  label: string;
  default: boolean;
  localizedFormGroupName: string;
  // devExtremeMessages: any;
  // angularLocaleMessages: any;
}

export const languages: Readonly<Language[]> = [
  {
    locale: 'it',
    label: 'Italiano',
    localizedFormGroupName: 'italianLocalization',
    // angularLocaleMessages: localeIt,
    // devExtremeMessages: dxItMessages,
    default: false
  },
  {
    locale: 'en',
    label: 'English',
    localizedFormGroupName: 'englishLocalization',
    // angularLocaleMessages: localeEn,
    // devExtremeMessages: dxEnMessages,
    default: true
  },
]