import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '@portal/media-css';
import { Logo, DocsIcon } from '../components';
import Nav from './Navigation';

interface NavbarProps {
  menu: React.ReactNode;
  logo: React.ReactNode;
  search: React.ReactNode;
}

export default function Navbar({ menu, search }: NavbarProps) {
  return (
    <NavbarContainer data-component-name="Navbar/Navbar">
      <div>
        <span>
          <Logo />
          <DocsIcon />
        </span>

        {search}
      </div>
      <Nav menu={menu}/>
    </NavbarContainer>
  );
}

export const NavbarContainer = styled.nav`
  box-sizing: border-box;
  font-family: var(--navbar-font-family);
  display: block;
  color: var(--navbar-color-text);
  box-shadow: inset 0 -1px rgb(227, 232, 238);
  font-size: 0.875rem;
  position: sticky;
  top: 0;
  z-index: 200;
  padding: 10px var(--sidebar-margin-left) 0;
  background: var(--navbar-color-background);

  ${mediaQueries.medium} {
    font-size: 1rem;
    padding: 10px var(--sidebar-margin-left) 0;
  }

  ${mediaQueries.print} {
    background: transparent;
    display: none;

    > :not(a, img) {
      display: none !important;
    }
    img {
      padding: 0;
      margin: 0;
    }
  }
`;
