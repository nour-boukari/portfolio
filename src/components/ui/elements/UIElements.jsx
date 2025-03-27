import styled from "styled-components";

export const Text = styled.p`
  color: ${({ theme }) => theme.secondaryTextColor};
  letter-spacing: 0em;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.primaryTextColor};
  margin: 0;
`;

export const HorizontalSeparator = styled.div`
  margin-bottom: 1px;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: radial-gradient(
      ellipse at left,
      ${({ theme }) => theme.primaryBoxShadow} 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
`;

export const VerticalSeparator = styled.div`
  margin-right: 1px;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background: radial-gradient(
      ellipse at top,
      ${({ theme }) => theme.primaryBoxShadow} 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
`;

export const TwoColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 0.5rem 1rem 1.5rem;
    gap: 1rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    margin: 0.25rem 0.5rem 0.75rem;
    gap: 0.5rem;
  }
`;

export const ColumnContainer = styled.div`
  width: 100%;
  padding: 1rem;
  @media (max-width: 1200px) {
    padding: 0;
  }
`;