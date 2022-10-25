import { useTranslation } from 'react-i18next';

import { DescriptionModal } from '@components/modals';
import { Section } from '@components/layouts';
import { SectionData } from '@interfaces/SectionData';
// import { SectionNames } from '@interfaces/SectionNames';
import {
  en_data_action, en_data_bonusaction, en_data_condition, en_data_environment, en_data_movement, en_data_reaction,
  it_data_action, it_data_bonusaction, it_data_condition, it_data_environment, it_data_movement, it_data_reaction,
} from '@assets/text'

import './Homepage.css';
import { ItemData } from '@interfaces/ItemData';

enum SectionNames { //TODO move into file when possible
  MOVEMENT = "MOVEMENT",
  ACTION = "ACTION",
  BONUSACTION = "BONUS-ACTION",
  REACTION = "REACTION",
  CONDITION = "CONDITION",
  ENVIRONMENT = "ENVIRONMENT"
}

export default function Homepage() {
  const { t, i18n } = useTranslation();

  const getSectionPropertiesTranslation = (name: SectionNames): SectionData => ({
    sectionTitle: t(`CONTENT-SECTIONS.${name}.SECTION-TITLE`),
    sectionId: name.toLowerCase(),
    sectionLimit: t(`CONTENT-SECTIONS.${name}.SECTION-LIMIT`),
    sectionSubtitle: t(`CONTENT-SECTIONS.${name}.SECTION-SUBTITLE`)
  })

  // associate each section with its properties 
  const sectionsProperties: { [key in SectionNames]: SectionData } = {
    [SectionNames.MOVEMENT]: getSectionPropertiesTranslation(SectionNames.MOVEMENT),
    [SectionNames.ACTION]: getSectionPropertiesTranslation(SectionNames.ACTION),
    [SectionNames.BONUSACTION]: getSectionPropertiesTranslation(SectionNames.BONUSACTION),
    [SectionNames.REACTION]: getSectionPropertiesTranslation(SectionNames.REACTION),
    [SectionNames.CONDITION]: getSectionPropertiesTranslation(SectionNames.CONDITION),
    [SectionNames.ENVIRONMENT]: getSectionPropertiesTranslation(SectionNames.ENVIRONMENT)
  }

  //associate each section with its content file
  const contents: { 
    [key: string]: { [key in SectionNames]: ItemData[] }
  } = {
    'en': {
      [SectionNames.MOVEMENT]: en_data_movement,
      [SectionNames.ACTION]: en_data_action,
      [SectionNames.BONUSACTION]: en_data_bonusaction,
      [SectionNames.REACTION]: en_data_reaction,
      [SectionNames.CONDITION]: en_data_condition,
      [SectionNames.ENVIRONMENT]: en_data_environment
    },
    'it': {
      [SectionNames.MOVEMENT]: it_data_movement,
      [SectionNames.ACTION]: it_data_action,
      [SectionNames.BONUSACTION]: it_data_bonusaction,
      [SectionNames.REACTION]: it_data_reaction,
      [SectionNames.CONDITION]: it_data_condition,
      [SectionNames.ENVIRONMENT]: it_data_environment
    },
  }

  return (
    <div>
      <div className="page-background">
        <div className="page fontsize" data-size="fullscreen">
          <Section properties={sectionsProperties[SectionNames.MOVEMENT]} content={contents[i18n.language][SectionNames.MOVEMENT]} />
          <Section properties={sectionsProperties[SectionNames.ACTION]} content={contents[i18n.language][SectionNames.ACTION]} />
          <Section properties={sectionsProperties[SectionNames.BONUSACTION]} content={contents[i18n.language][SectionNames.BONUSACTION]} />
          <Section properties={sectionsProperties[SectionNames.REACTION]} content={contents[i18n.language][SectionNames.REACTION]} />
          <Section properties={sectionsProperties[SectionNames.CONDITION]} content={contents[i18n.language][SectionNames.CONDITION]} />
          <Section properties={sectionsProperties[SectionNames.ENVIRONMENT]} content={contents[i18n.language][SectionNames.ENVIRONMENT]} />
        </div>
      </div>
      <DescriptionModal />
    </div>
  );
}
