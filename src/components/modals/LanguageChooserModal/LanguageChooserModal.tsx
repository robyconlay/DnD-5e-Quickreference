import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@store/store";
import { languages } from "@utils/locales";
import './LanguageChooserModal.css'


export default function LanguageChooserModal() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const visible = useSelector((state: RootState) => state.languageChooserModal.visible)

  const languageOptions = languages;

  const handleClose = () => dispatch({ type: 'languageChooserModal/closeModal' });
  const handleSelect = (locale: string) => {
    dispatch({ type: 'languageChooserModal/selectLanguage', payload: locale });
    i18n.changeLanguage(locale);
  }

  return (
    <Modal show={visible} onHide={handleClose} size='sm'>
      <Modal.Header closeButton>
        <Modal.Title>
          {t('LANGUAGE-CHOOSER.CHOOSE-LANGUAGE')}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="">
          {
            languageOptions.map(lang =>
              <div className="lang-container pointer" onClick={() => handleSelect(lang.locale)} key={lang.locale}>
                <img className="lang-flag" src={lang.image} alt={lang.locale}></img>
                <div className="lang-item">{lang.label}</div>
              </div>
            )
          }
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button type="button" variant="secondary" onClick={handleClose}>{t('GENERAL.CLOSE')}</Button>
      </Modal.Footer>
    </Modal >
  )
}
