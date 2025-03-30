import styled from "styled-components";
import { IoIosCloudDownload, IoIosSend } from "react-icons/io";
import { HorizontalSeparator, VerticalSeparator } from "../../ui/elements/UIElements";
import resume from "../../../assets/data/resume";
import profileFrame from "../../../assets/images/profile-frame.webp";
import { ReactTyped } from "react-typed";
import { useScroll } from "../../../contexts/ScrollContext";
import SocialMediaLinks from "./SocialMediaLinks";

const ProfileCardWrapper = styled.div`
  @media (min-width: 1261px) {
    min-width: 350px;
    max-width: 400px;
  }
  @media (min-width: 481px) {
    position: relative;
    z-index: 0;
    &:before {
      content: "";
      position: absolute;
      left: -15px;
      top: -15px;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.accentBoxShadow};
      border-radius: 4px;
      opacity: 0.3;
      z-index: -10;
    }
  }
`;

const ProfileCardContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.1) 10px 10px 15px;
  z-index: 10;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ImageWrapper = styled.div`
  padding: 2rem;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 155 / 128;
  object-fit: contain;
  
  @media (min-width: 769px) and (max-width: 1200px) {
    width: 60%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 75%;
  }
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 34px;
  font-weight: 600;
  color: ${({ theme }) => theme.primaryTextColor};
  line-height: 32px;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  line-height: 20px;
  height: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.accentColor};
`;

const CardFooter = styled.div`
  height: 70px;
  display: flex;
  width: 100%;
`;

const ActionButton = styled.a`
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryTextColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: gap 0.5s, color 0.5s;
  
  &:hover {
    color: ${({ theme }) => theme.accentColor};
    gap: 16px;
  }
  @media (max-width: 336px) {
    padding: 0;
  }
`;

const ButtonIcon = styled(({ component: Icon, ...props }) => <Icon {...props} />)`
  font-size: 16px;
`;

const ProfileHeader = () => (
  <>
    <ImageWrapper>
      <ProfileImage src={profileFrame} alt="Profile photo" />
    </ImageWrapper>
    <Title>{resume.fullname}</Title>
    <Subtitle>
      <ReactTyped
        strings={resume.titles}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </Subtitle>
  </>
);

const downloadCV = () => {
  const pdfUrl = "assets/nour-boukari-resume.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "nour_boukari_resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ProfileCard = () => {
  const { scrollToSection } = useScroll();

  return (
    <ProfileCardWrapper>
      <ProfileCardContainer>
        <CardContent>
          <ProfileHeader />
          <SocialMediaLinks />
        </CardContent>
        <HorizontalSeparator />
        <CardFooter>
          <ActionButton onClick={downloadCV}>
            Download CV
            <ButtonIcon component={IoIosCloudDownload} />
          </ActionButton>
          <VerticalSeparator />
          <ActionButton onClick={() => scrollToSection("contact")}>
            Contact me
            <ButtonIcon component={IoIosSend} />
          </ActionButton>
        </CardFooter>
      </ProfileCardContainer>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;
