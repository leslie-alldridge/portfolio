import React from 'react';
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to='experience' onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
            Cloud
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
