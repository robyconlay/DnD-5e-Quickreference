import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { languages } from "@utils/locales";
import './LanguageChooser.scss'

export default function LanguageChooser() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const currentLang = i18n.language;

  const imageSource = languages.filter(lang => lang.locale === currentLang).pop()?.image;
  
  const handleClick = () => dispatch({ type: 'languageChooserModal/openModal' });

  return (
    <div>
      <img id="lang-icon" className="pointer" src={imageSource} alt={currentLang}
        onClick={handleClick}></img>
    </div>
  )
}