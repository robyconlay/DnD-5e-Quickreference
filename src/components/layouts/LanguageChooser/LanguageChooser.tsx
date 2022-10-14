import { useDispatch } from "react-redux";

import './LanguageChooser.css'


export default function LanguageChooser() {
  const currentLang = 'en'

  const dispatch = useDispatch();

  const handleClick = () => dispatch({ type: 'languageChooserModal/openModal' })

  return (
    <div>
      <img id="lang-icon" className="pointer" src={`assets/images/${currentLang}.png`} alt={currentLang}
        onClick={handleClick}></img>
    </div>
  )
}