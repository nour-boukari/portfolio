import styled from "styled-components";
import Section from "../ui/Section";
import { Text } from "../../ui/elements/UIElements";
import resume from "../../../assets/data/resume";

const AboutSection = styled.div`
  @media (max-width: 1200px) {
    margin: 0 1rem;
  }
  @media (max-width: 480px) {
    margin: 0 0.5rem;
  }
`;

function About() {
  return (
    <Section title="About Me" style={{height: '100%'}}>
      <AboutSection>
        <Text>
          {resume.greeting && <strong>{resume.greeting}</strong>}
          <br />
          {resume.summary}
        </Text>
      </AboutSection>
    </Section>
  );
}

export default About;
