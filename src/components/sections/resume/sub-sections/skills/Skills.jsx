import Section from "../../../ui/Section";
import { HorizontalSeparator, VerticalSeparator, TwoColumnContainer, ColumnContainer } from "../../../../ui/elements/UIElements";
import Languages from "./Languages";
import GridIconList from "../../../ui/GridIconList";
import BulletPointList from "../../../ui/BulletPointList";
import { FaHtml5, FaListUl } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { frontendSkills, backendSkills, bulletPointItems } from "../../../../../consts/skillsConstants";
import styled from "styled-components"; 

const SectionSeparator = styled(HorizontalSeparator)`
  margin: 0.5rem 0;
  @media (max-width: 1200px) {
    display: none;
  }
`;

function Skills() {
  return (
    <Section title="Skills">
      <TwoColumnContainer>
        <ColumnContainer>
          <GridIconList
            items={frontendSkills}
            titleIcon={<FaHtml5 />}
            title="Frontend"
          />
        </ColumnContainer>
        <VerticalSeparator />
        <ColumnContainer>
          <GridIconList
            items={backendSkills}
            titleIcon={<VscServerProcess />}
            title="Backend"
          />
        </ColumnContainer>
      </TwoColumnContainer>
      <SectionSeparator />
      <TwoColumnContainer>
        <ColumnContainer>
          <BulletPointList
            items={bulletPointItems}
            titleIcon={<FaListUl />}
            title="Expertise"
          />
        </ColumnContainer>
        <VerticalSeparator />
        <ColumnContainer>
          <Languages />
        </ColumnContainer>
      </TwoColumnContainer>
    </Section>
  );
}

export default Skills;