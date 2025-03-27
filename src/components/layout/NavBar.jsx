import styled from "styled-components";
import { VerticalSeparator } from "../ui/elements/UIElements";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useScroll } from "../../contexts/ScrollContext";

const NavBarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.primaryTextColor};
  @media (max-width: 1200px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  @media (max-width: 768px) {
    gap: 0.25rem;
  }
  @media (max-width: 480px) {
    background-color: ${({ theme }) => theme.primaryColor};
    -webkit-box-shadow: ${({ theme }) => theme.navbarBoxShadow};
    -moz-box-shadow: ${({ theme }) => theme.navbarBoxShadow};
    box-shadow: ${({ theme }) => theme.navbarBoxShadow};
    gap: 0;
  }
`;

const MainMenu = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  @media (min-width: 481px) and (max-width: 1200px) {
    -webkit-box-shadow: ${({ theme }) => theme.navbarBoxShadow};
    -moz-box-shadow: ${({ theme }) => theme.navbarBoxShadow};
    box-shadow: ${({ theme }) => theme.navbarBoxShadow};
  }
  @media (max-width: 768px) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const SwitchThemeMenu = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  @media (min-width: 481px) and (max-width: 1200px) {
    -webkit-box-shadow: ${({ theme }) => theme.navbarBoxShadow};
    -moz-box-shadow: ${({ theme }) => theme.navbarBoxShadow};
    box-shadow: ${({ theme }) => theme.navbarBoxShadow};
  }
  @media (max-width: 768px) {
    border-radius: 0;
  }
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const NavBarItem = styled.a`
  padding: 16px;
  cursor: pointer;
  font-weight: ${({ theme }) => (theme.mode === "dark" ? 400 : 700)};
  &.active {
    color: ${({ theme }) => theme.accentColor};
  }
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const NavBarIcon = styled.a`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  cursor: pointer;
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
  }
`;

function NavBar() {
  const { toggleTheme, themeMode } = useContext(ThemeContext);
  const { activeSection, scrollToSection } = useScroll();

  const menuItems = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <NavBarWrapper>
      <MainMenu>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <NavBarItem
              className={activeSection === item.id ? "active" : ""}
              onClick={() => scrollToSection(item.id)}
              role="button"
              tabIndex={0}
            >
              {item.label}
            </NavBarItem>
            {index < menuItems.length - 1 && <VerticalSeparator />}
          </React.Fragment>
        ))}
      </MainMenu>
      <SwitchThemeMenu>
        <NavBarIcon
          onClick={toggleTheme}
          aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
        >
          {themeMode === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </NavBarIcon>
      </SwitchThemeMenu>
    </NavBarWrapper>
  );
}

export default NavBar;