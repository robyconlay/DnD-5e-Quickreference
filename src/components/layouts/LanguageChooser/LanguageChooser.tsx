import { useDispatch } from "react-redux";

import { languages } from "@utils/locales";
import './LanguageChooser.css'

export default function LanguageChooser() {
  const currentLang = 'en'

  const dispatch = useDispatch();

  const handleClick = () => dispatch({ type: 'languageChooserModal/openModal' })

  const imageSource = languages.filter(lang => lang.locale === currentLang).pop()?.image;

  return (
    <div>
      <img id="lang-icon" className="pointer" src={imageSource} alt={currentLang}
        onClick={handleClick}></img>
    </div>
  )
}