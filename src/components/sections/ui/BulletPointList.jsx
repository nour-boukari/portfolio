import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { HorizontalSeparator } from "../../ui/elements/UIElements";
import TitleWithIcon from "./TitleWithIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

const ListItem = styled.div`
  display: flex;
  gap: 1rem;
`;

const CheckIcon = styled(FaCheck)`
  color: ${({ theme }) => theme.accentColor};
  width: 16px;
  height: 26px;
`;

const ItemText = styled.h5`
  color: ${({ theme }) => theme.primaryTextColor};
  margin: 0;
`;

function BulletPointList({ items, titleIcon, title }) {
  return (
    <>
      <TitleWithIcon title={title}>
        {titleIcon}
      </TitleWithIcon>
      <HorizontalSeparator style={{ margin: "0.5rem 0" }} />
      <Container>
        {items.map((item, index) => (
          <ListItem key={index}>
            <CheckIcon />
            <ItemText>{item}</ItemText>
          </ListItem>
        ))}
      </Container>
    </>
  );
}

export default BulletPointList;