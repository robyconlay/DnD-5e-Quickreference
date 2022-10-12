import { DescriptionModal } from '@components/modals';
import { Section } from '@components/layouts';
import data_action from '@assets/text/en/data_action';
import data_bonusaction from '@assets/text/en/data_bonusaction';
import data_movement from '@assets/text/en/data_movement';
import data_condition from '@assets/text/en/data_condition';
import data_reaction from '@assets/text/en/data_reaction';
import { SectionData } from '@interfaces/SectionData';
import { data_environment } from '@assets/text/en/data_environment';

import './Homepage.css';

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
  return (
    <div>
      <div className="page-background">
        <div className="page fontsize" data-size="fullscreen">
          <Section properties={MOVEMENT} content={data_movement} />
          <Section properties={ACTION} content={data_action} />
          <Section properties={BONUSACTION} content={data_bonusaction} />
          <Section properties={REACTION} content={data_reaction} />
          <Section properties={CONDITION} content={data_condition} />
          <Section properties={ENVIRONMENT} content={data_environment} />
        </div>
      </div>
      <DescriptionModal />
    </div>
  );
}
