import Section from "../ui/Section";
import Skills from "./sub-sections/skills/Skills";
import Testimonials from "./sub-sections/testimonials/Testimonials";
import TitleWithIcon from "../ui/TitleWithIcon";
import { FaBriefcase, FaUserGraduate } from "react-icons/fa";
import {
  HorizontalSeparator,
  VerticalSeparator,
  TwoColumnContainer,
  ColumnContainer,
} from "../../ui/elements/UIElements";
import ResumeItem from "./ResumeItem";
import resume from "../../../assets/data/resume";

function Resume() {
  return (
    <Section title="Resume">
      <TwoColumnContainer>
        <ColumnContainer>
          <TitleWithIcon title="Experience">
            <FaBriefcase />
          </TitleWithIcon>
          {resume.experience.map((experience, index) => (
            <div key={`experience-` + index}>
              <HorizontalSeparator style={{ margin: "0.5rem 0" }} />
              <ResumeItem
                date={experience.date}
                title={experience.title}
                subtitle={experience.company}
              >
                {experience.summary}
              </ResumeItem>
            </div>
          ))}
        </ColumnContainer>
        <VerticalSeparator />
        <ColumnContainer>
          <TitleWithIcon title="Education">
            <FaUserGraduate />
          </TitleWithIcon>
          {resume.education.map((education, index) => (
            <div key={`education-` + index}>
              <HorizontalSeparator style={{ margin: "0.5rem 0" }} />
              <ResumeItem
                date={education.date}
                title={education.diploma}
                subtitle={education.school}
              ></ResumeItem>
            </div>
          ))}
        </ColumnContainer>
      </TwoColumnContainer>
      <Skills />
      <Testimonials />
    </Section>
  );
}

export default Resume;
