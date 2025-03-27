import styled from "styled-components";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import resume from "../../../assets/data/resume";

const SocialLinks = styled.div`
  margin: 1rem 0 3rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 20px;
  margin: 0 6px;
  display: inline-block;
  transition: transform 0.5s;
  
  &:hover {
    color: ${({ theme }) => theme.accentColor};
    transform: scale(1.2);
  }
`;

const socialMediaData = [
  { href: resume.linkedIn, icon: FaLinkedin, key: 'linkedin' },
  { href: resume.github, icon: FaGithub, key: 'github' },
  { href: resume.whatsapp, icon: FaWhatsapp, key: 'whatsapp' }
];

const SocialMediaLinks = () => (
  <SocialLinks>
    {socialMediaData.map(({ href, icon: Icon, key }) => (
      <SocialLink 
        key={key}
        href={href}
        target="_blank"
      >
        <Icon />
      </SocialLink>
    ))}
  </SocialLinks>
);

export default SocialMediaLinks;