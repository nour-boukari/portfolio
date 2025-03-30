import styled from "styled-components";
import Section from "../ui/Section";
import {
  VerticalSeparator,
  TwoColumnContainer,
  ColumnContainer,
} from "../../ui/elements/UIElements";
import {
  FaAngular,
  FaReact,
  FaVuejs,
  FaSass,
  FaBootstrap,
  FaNodeJs,
  FaShopify,
} from "react-icons/fa";
import { SiDotnet, SiCsharp, SiMicrosoftsqlserver } from "react-icons/si";
import projects from "../../../assets/data/projects.json";
import Project from "./Project";
import comingSoon from "../../../assets/images/coming-soon.webp";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 400px;
  object-fit: contain;
  @media (max-width: 768px) {
    max-width: 300px;
    width: 100%;
  }
`;

const iconMap = {
  FaAngular,
  FaReact,
  FaVuejs,
  FaSass,
  FaBootstrap,
  FaNodeJs,
  FaShopify,
  SiDotnet,
  SiCsharp,
  SiMicrosoftsqlserver,
};

const Icon = styled(({ component: Component, ...props }) => (
  <Component {...props} />
))`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.accentColor};
  font-size: 16px;
`;

function Portfolio() {
  return (
    <Section title="Portfolio">
      {projects.length === 0 ? (
        <ImageWrapper>
        <Image src={comingSoon} alt="coming-soon" />
      </ImageWrapper>
      ) : (
        <TwoColumnContainer>
          <ColumnContainer>
            {projects
              .slice(0, Math.ceil(projects.length / 2))
              .map((project, index) => (
                <Project key={index} {...project}>
                  {project.technologies.map((tech, i) => (
                    <Icon key={i} component={iconMap[tech]} />
                  ))}
                </Project>
              ))}
          </ColumnContainer>
          <VerticalSeparator />
          <ColumnContainer>
            {projects
              .slice(Math.ceil(projects.length / 2))
              .map((project, index) => (
                <Project key={index} {...project}>
                  {project.technologies.map((tech, i) => (
                    <Icon key={i} component={iconMap[tech]} />
                  ))}
                </Project>
              ))}
          </ColumnContainer>
        </TwoColumnContainer>
      )}
    </Section>
  );
}

export default Portfolio;
