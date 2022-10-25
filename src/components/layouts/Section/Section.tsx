import { Item } from "@components/layouts";
import { ItemData } from "@interfaces/ItemData";
import { SectionData } from "@interfaces/SectionData";

import './Section.scss'

export interface SectionProps {
  properties: SectionData;
  content: ItemData[];
}

export default function Section({ properties, content }: SectionProps) {

  return (
    <div id={`section-${properties.sectionId}`} className="section-container" >
      <div className="section-title">
        {properties.sectionTitle} <span className="float-right">{properties.sectionLimit}</span>
      </div>
      <div className="section-content">
        <div className="section-row section-subtitle text fontsize">
          {properties.sectionSubtitle}
        </div>
        <div className="section-row" id="basic-actions">
          {
            content.map(el => <Item key={el.title} item={el} />)
          }
        </div>
      </div>
    </div>
  );
}

