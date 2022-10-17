import it_flag from '@assets/images/it.png'
import en_flag from '@assets/images/en.png'

export interface Language {
  locale: string;
  label: string;
  default: boolean;
  localizedFormGroupName: string;
  image: string;
}

export const languages: Readonly<Language[]> = [
  {
    locale: 'it',
    label: 'Italiano',
    localizedFormGroupName: 'italianLocalization',
    default: false,
    image: it_flag
  },
  {
    locale: 'en',
    label: 'English',
    localizedFormGroupName: 'englishLocalization',
    default: true,
    image: en_flag
  },
]