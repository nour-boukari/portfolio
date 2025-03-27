import styled from "styled-components";

const TitleWithIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const TitleIcon = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50px;
  text-align: center;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.accentColor};
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 0 0 0 1rem;
  line-height: 14px;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryTextColor};
`;

function TitleWithIcon(props) {
  return (
    <TitleWithIconWrapper>
      <TitleIcon>{props.children}</TitleIcon>
      <Title>{props.title}</Title>
    </TitleWithIconWrapper>
  );
}

export default TitleWithIcon;
