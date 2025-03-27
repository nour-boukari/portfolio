import styled from "styled-components";
import { HorizontalSeparator } from "../../ui/elements/UIElements";
import TitleWithIcon from "./TitleWithIcon";

const IconList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  color: ${({ theme }) => theme.accentColor};
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconLabel = styled.h5`
  color: ${({ theme }) => theme.primaryTextColor};
  margin: 0;
`;

function GridIconList({ items, titleIcon, title }) {
  return (
    <>
      <TitleWithIcon title={title}>
        {titleIcon}
      </TitleWithIcon>
      <HorizontalSeparator style={{ margin: "0.5rem 0" }} />
      <IconList>
        {items.map((item, index) => (
          <IconItem key={index}>
            <Icon>
              <item.icon />
            </Icon>
            <IconLabel>{item.label}</IconLabel>
          </IconItem>
        ))}
      </IconList>
    </>
  );
}

export default GridIconList;