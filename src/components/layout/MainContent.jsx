import styled from "styled-components";
import About from "../sections/about/About";
import Resume from "../sections/resume/Resume";
import Portfolio from "../sections/portfolio/Portfolio";
import Contact from "../sections/contact/Contact";
import { useEffect } from "react";
import { smoothScrollTo } from "../../utils/smoothScrollTo";
import { useScroll } from '../../contexts/ScrollContext';

const MainContentWrapper = styled.div`
  @media (min-width: 1200px) {
    padding: 2rem 1.25rem 1.25rem;
    overflow-y: auto;
  }
  @media (min-width: 481px) {
    padding: 1.25rem;
    border-top-right-radius: ${({ theme }) => theme.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  }
  padding: 0.75rem;
  height: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
`;

const MainSectionContainer = styled.div`
  @media (max-width: 1200px) {
    scroll-margin-top: 60px;
  }
`;

function MainContent() {
  const { sections } = useScroll();

  useEffect(()=> {
    smoothScrollTo(sections.about);
  }, [sections.about])

  return (
    <MainContentWrapper id="main-content">
      <MainSectionContainer ref={sections.about} data-section="about">
        <About />
      </MainSectionContainer>
      <MainSectionContainer ref={sections.resume} data-section="resume">
        <Resume />
      </MainSectionContainer>
      <MainSectionContainer ref={sections.portfolio} data-section="portfolio">
        <Portfolio />
      </MainSectionContainer>
      <MainSectionContainer ref={sections.contact} data-section="contact">
        <Contact />
      </MainSectionContainer>
    </MainContentWrapper>
  );
}

export default MainContent;
