import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.backgroundColor};
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  &::after,
  &::before {
    content: "";
    width: 48px;
    height: 48px;
    border: 2px solid ${({ theme }) => theme.mode === "dark" ? "#fff" : "#000"};
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    animation: rotation 2s ease-in-out infinite;
  }
  &::after {
    border-color: ${({ theme }) => theme.accentColor};
    animation-delay: 1s;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
}

export default Loader;
