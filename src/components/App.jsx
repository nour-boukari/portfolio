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

const Convas = styled.div`
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
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);

    const images = document.getElementsByTagName("img");
    let loadedImages = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    }

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setIsLoading(false);
      }
    };

    Array.from(images).forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        img.addEventListener("error", handleImageLoad);
      }
    });
    return () => {
      window.removeEventListener("resize", handleResize);
      Array.from(images).forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScrollProvider>
        {isLoading ? (
          <Loader />
        ) : (
          <Convas>
            {isLargeScreen && <AnimatedBackground />}
            <Container>
              <ProfileCard />
              <MainLayout>
                <NavBar />
                <MainContent />
              </MainLayout>
            </Container>
          </Convas>
        )}
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;
