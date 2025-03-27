import styled from "styled-components";
import { Text } from "../../ui/elements/UIElements";

const DateContainer = styled.div`
  margin: 0 0 11px;
  padding: 0 5px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-size: 13px;
  line-height: 18px;
  color: ${({ theme }) => theme.accentColor};
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.accentColor};
`;

const ResumeItemTitle = styled.h3`
  margin: 0;
  font-size: 17px;
  color: ${({ theme }) => theme.primaryTextColor};
  font-weight: 600;
  line-height: 1.3;
`;

const ResumeItemSubtitle = styled.h5`
  margin: 4px 0 11px;
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryTextColor};
  font-weight: 400;
`;

function    ResumeItem(props) {
  return (
    <div>
      <DateContainer>{props.date}</DateContainer>
      <ResumeItemTitle>{props.title}</ResumeItemTitle>
      <ResumeItemSubtitle>{props.subtitle}</ResumeItemSubtitle>
      <Text>{props.children}</Text>
    </div>
  );
}

export default ResumeItem;
