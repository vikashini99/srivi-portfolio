import React from 'react';
import { useTheme } from 'styled-components'; // Import useTheme for theme context
import styled from 'styled-components';
import { FaBars } from "react-icons/fa6";

import { NavLink as LinkR } from 'react-router-dom'; // Import LinkR for routing

// Styled components
export const Nav = styled.div`
  background-color: transparent; /* Navbar stays transparent */
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;
  box-shadow: none; /* Ensure no shadows are present */
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled.div`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.secondary}; /* Ensure text color is set */

  @media (max-width: 640px) {
    padding: 0;
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

export const NavLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.secondary} !important;
    background: transparent; /* No background on hover */
  }

  &.active {
    border-bottom: none; /* No line for active state */
  }
`;


export const GitHubButton = styled.button`
  border: 1.8px solid ${({ theme }) => theme.gray_one};
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  font-size: 16px;
  transition: background 0.6s ease-in-out, color 0.6s ease-in-out;
  text-decoration: none; /* Remove underline */

  &:hover {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.gray_one};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + '99'}; // Optional transparent background for the mobile menu
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  text-decoration: none; /* Remove underline */

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;


// Navbar component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme(); // Access the theme

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>Srivi</NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink> {/* Opens Projects in the same tab */}
        </NavItems>
        <ButtonContainer>
          <GitHubButton 
            as="a" 
            href="https://drive.google.com/file/d/1IJP6aGDhrcJwU-u0psY-QFURaQ3C1j7w/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resume
          </GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
      <MobileMenu isOpen={isOpen}>
        <MobileMenuItems>
          <MobileMenuLink to="/" onClick={() => setIsOpen(false)}>Home</MobileMenuLink>
          <MobileMenuLink to="/projects" onClick={() => setIsOpen(false)}>Projects</MobileMenuLink> {/* Same tab link */}
        </MobileMenuItems>
        <MobileMenuButton 
          as="a" 
          href="https://drive.google.com/file/d/1IJP6aGDhrcJwU-u0psY-QFURaQ3C1j7w/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Resume
        </MobileMenuButton>
      </MobileMenu>
    </Nav>
  );
};



export default Navbar;

