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

const MOVEMENT: SectionData = {
  sectionTitle: "Movement",
  sectionId: "movement",
  sectionLimit: "limited by movement speed",
  sectionSubtitle: "You can move at any time during your turn (before, after, or during actions)."
}
const ACTION: SectionData = {
  sectionTitle: "Action",
  sectionId: "action",
  sectionLimit: "1/Turn",
  sectionSubtitle: "You can also interact with one object or feature of the environment for free."
}
const BONUSACTION: SectionData = {
  sectionTitle: "Bonus action",
  sectionId: "bonus-action",
  sectionLimit: "max. 1/turn",
  sectionSubtitle: "You can take a bonus action only when a special ability, spell, or feature states that you can do something as a bonus action."
}
const REACTION: SectionData = {
  sectionTitle: "Reaction",
  sectionId: "reaction",
  sectionLimit: "max. 1/round",
  sectionSubtitle: "A reaction is an instant response to a trigger of some kind, which can occur on your turn or on someone else's."
}
const CONDITION: SectionData = {
  sectionTitle: "Condition",
  sectionId: "condition",
  sectionLimit: "",
  sectionSubtitle: "Conditions alter your capabilities in a variety of ways, and can arise as a result of a spell, a class feature, a monster's attack, or other effect."
}
const ENVIRONMENT: SectionData = {
  sectionTitle: "Environmental Effects",
  sectionId: "environment",
  sectionLimit: "",
  sectionSubtitle: ""
}

export default function Homepage() {
  console.log(i18next.language)

  return (
    <div>
      <div className="page-background">
        <div className="page fontsize" data-size="fullscreen">
          <Section properties={MOVEMENT} content={i18next.language === 'en' ? en_data_movement : it_data_movement} />
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
