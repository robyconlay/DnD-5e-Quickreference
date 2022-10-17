import { DescriptionModal } from '@components/modals';
import { Section } from '@components/layouts';
// import it_data_action from '@assets/text/it/data_action';
import { SectionData } from '@interfaces/SectionData';
import {
  en_data_action, en_data_bonusaction, en_data_condition, en_data_environment, en_data_movement, en_data_reaction,
  it_data_action, it_data_bonusaction, it_data_condition, it_data_environment, it_data_movement, it_data_reaction,
} from '@assets/text'

import './Homepage.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

// function translation() {
//   i18next.language === 'en'
// }

export default function Homepage() {
  const { t } = useTranslation();

  const getSectionPropertiesTranslation = (title: string): SectionData => ({
    sectionTitle: t(`CONTENT-SECTIONS.${title}.SECTION-TITLE`),
    sectionId: t(`CONTENT-SECTIONS.${title}.SECTION-ID`),
    sectionLimit: t(`CONTENT-SECTIONS.${title}.SECTION-LIMIT`),
    sectionSubtitle: t(`CONTENT-SECTIONS.${title}.SECTION-SUBTITLE`)
  })

  const MOVEMENT: SectionData = getSectionPropertiesTranslation('MOVEMENT');
  const ACTION: SectionData = getSectionPropertiesTranslation('ACTION');
  const BONUSACTION: SectionData = getSectionPropertiesTranslation('BONUSACTION');
  const REACTION: SectionData = getSectionPropertiesTranslation('REACTION');
  const CONDITION: SectionData = getSectionPropertiesTranslation('CONDITION');
  const ENVIRONMENT: SectionData = getSectionPropertiesTranslation('ENVIRONMENT');

  return (
    <div>
      <div className="page-background">
        <div className="page fontsize" data-size="fullscreen">
          <Section properties={MOVEMENT} content={en_data_movement} />
          <Section properties={ACTION} content={en_data_action} />
          <Section properties={BONUSACTION} content={en_data_bonusaction} />
          <Section properties={REACTION} content={en_data_reaction} />
          <Section properties={CONDITION} content={en_data_condition} />
          <Section properties={ENVIRONMENT} content={en_data_environment} />
        </div>
      </div>
      <DescriptionModal />
    </div>
  );
}
