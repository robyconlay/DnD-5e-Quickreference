import it_flag from '@assets/images/it.png'
import en_flag from '@assets/images/en.png'

export interface Language {
  locale: string;
  label: string;
  default: boolean;
  localizedFormGroupName: string;
  image: string;
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
    default: false,
    image: it_flag
  },
  {
    locale: 'en',
    label: 'English',
    localizedFormGroupName: 'englishLocalization',
    // angularLocaleMessages: localeEn,
    // devExtremeMessages: dxEnMessages,
    default: true,
    image: en_flag
  },
]