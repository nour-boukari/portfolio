import { useState, useEffect, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import MainContent from "./layout/MainContent";
import NavBar from "./layout/NavBar";
import ProfileCard from "./layout/profile-card/ProfileCard";
import { ThemeContext } from "../contexts/ThemeContext";
import { ScrollProvider } from "../contexts/ScrollContext";
import AnimatedBackground from "./ui/animated-background/AnimatedBackground";
import { getEncodedSVG } from "../utils/getEncodedSVG";
import GlobalStyles from "../styles/GlobalStyles";
import Loader from "./ui/loader/Loader";
import useScreenSize from "../hooks/useScreenSize";

const Canvas = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1201px) {
    height: 100%;
  }
  @media (min-width: 481px) and (max-width: 1200px) {
    background-image: ${({ theme }) =>
      `url("data:image/svg+xml;base64,${getEncodedSVG(
        theme.backgroundStrokeColor
      )}")`};
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  @media (min-width: 1201px) {
    height: 88%;
    width: 80%;
    min-width: 1185px;
    min-height: 560px;
    max-height: 700px;
    flex-direction: row;
  }
  @media (min-width: 769px) {
    width: 80vw;
    max-width: 900px;
  }
  @media (min-width: 481px) {
    width: 80vw;
  }
`;

const MainLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
  @media (max-width: 480px) {
    margin: 0.25rem 0;
  }
`;

function App() {
  const { theme } = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  const isLargeScreen = useScreenSize(1200);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Loader />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScrollProvider>
        <Canvas>
          {isLargeScreen && <AnimatedBackground />}
          <Container>
            <ProfileCard />
            <MainLayout>
              <NavBar />
              <MainContent />
            </MainLayout>
          </Container>
        </Canvas>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;
