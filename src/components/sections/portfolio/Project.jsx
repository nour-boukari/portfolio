import styled from "styled-components";
import {
  Title,
  Text,
} from "../../ui/elements/UIElements";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  text-align: center;
`;

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height || "200px"};
  background-color: gray;
`;

const ProjectActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.a`
  background-color: ${({ theme }) => theme.secondaryButtonColor};
  color: ${({ theme }) => theme.primaryTextColor};
  border: 1px solid  ${({ theme }) => theme.borderColor};
  border-radius: 2px;
  text-decoration: none;
  font-weight: 400;
  width: 100%;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Technologies = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

function Project(props) {
    return (
      <ProjectContainer>
        <ProjectImageWrapper height={props.imageHeight}>
          {props.imageLink && <img src={props.imageLink} alt={props.imageAlt || props.title} />}
        </ProjectImageWrapper>
        <div>
          <Title style={{ margin: 0 }}>{props.title}</Title>
          <Text style={{ margin: 0 }}>{props.description}</Text>
          <Technologies>{props.children}</Technologies>
        </div>
        <ProjectActionButtons>
          <Button
            href={props.demoLink || "#"}
            target="_blank"
            aria-label="View demo"
          >
            View Demo
          </Button>
          <Button
            href={props.githubLink || "#"}
            target="_blank"
            aria-label="View GitHub repository"
          >
            View GitHub
          </Button>
        </ProjectActionButtons>
      </ProjectContainer>
    );
  }
  
  export default Project;