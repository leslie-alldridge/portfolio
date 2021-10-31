import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksExternal,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='hero'>Leslie Alldridge</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='experience'>Experience</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Cloud</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksExternal
                to={{
                  pathname:
                    'https://leslie-alldridge.dev/LeslieAlldridgeCV-2021.pdf',
                }}
                target='_blank'
              >
                CV
              </NavLinksExternal>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
