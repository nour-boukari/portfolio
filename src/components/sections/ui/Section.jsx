import styled from "styled-components";
import { HorizontalSeparator } from "../../ui/elements/UIElements";

const SectionWrapper = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 20px;
  position: relative;
  margin: 0 1rem;
  &::first-letter {
    font-size: 200%;
    color: ${({ theme }) => theme.accentColor};
  }
  &:before {
    content: "";
    position: absolute;
    left: -15px;
    top: 20px;
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.accentBoxShadow};
    border-radius: 40px;
  }
`;
function Section(props) {
  return (
    <SectionWrapper>
      <SectionTitle>{props.title}</SectionTitle>
      <HorizontalSeparator />
      {props.children}
    </SectionWrapper>
  );
}

export default Section;
