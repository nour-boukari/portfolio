import { FaLanguage } from "react-icons/fa6";
import { HorizontalSeparator, Title } from "../../../../ui/elements/UIElements";
import TitleWithIcon from "../../../ui/TitleWithIcon";
import styled from "styled-components";

const LanguageEntryWrapper = styled.div`
  padding: 0.5rem 1rem;
`;
const ProgressDotContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;
const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.inactiveColor};
  &.highlighted {
    background-color: ${({ theme }) => theme.accentColor};
  }
`;

function Languages() {
  return (
    <>
      <TitleWithIcon title="Languages">
        <FaLanguage />
      </TitleWithIcon>
      <HorizontalSeparator style={{ margin: "0.5rem 0" }} />
      <LanguageEntry title="English" score={9}></LanguageEntry>
      <LanguageEntry title="French" score={8}></LanguageEntry>
      <LanguageEntry title="German" score={5}></LanguageEntry>
      <LanguageEntry title="Arabic" score={10}></LanguageEntry>
    </>
  );
}

function LanguageEntry(props) {
  return (
    <LanguageEntryWrapper>
      <Title>{props.title}</Title>
      <ProgressDotContainer>
        {[...Array(10).keys()].map((index) => (
          <Dot
            key={"dot-" + index}
            className={index < props.score ? "highlighted" : ""}
          />
        ))}
      </ProgressDotContainer>
    </LanguageEntryWrapper>
  );
}

export default Languages;
