import styled from 'styled-components';
import { mediaQueries } from '@portal/media-css';

interface SidebarProps {
  opened?: boolean;
  animate?: boolean;
}

export const Sidebar = styled.aside.attrs(() => ({
  'data-component-name': 'Sidebar/Sidebar'
}))<SidebarProps>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: var(--sidebar-background-color);
  font-size: var(--sidebar-font-size);
  font-family: var(--sidebar-font-family);
  color: var(--sidebar-text-color);
  top: var(--navbar-height);
  height: calc(100vh - var(--navbar-height));
  display: flex;
  flex-direction: column;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  box-shadow: inset -1px 0 var(--sail-color-gray-100);

  ${({ opened, animate }) => `
    opacity: ${opened ? '1' : '0'};
    pointer-events: ${opened ? 'auto' : 'none'};
    
    & > * {
      transform: ${opened ? 'translate(0, 0)' : 'translate(0, 40px)'};
      transition: ${animate ? 'transform 0.65s ease, opacity 0.25s ease;' : 'none'};
    }
  `};

  ${mediaQueries.medium} {
    position: sticky;
    pointer-events: auto;
    display: flex;
    opacity: 1;
    flex-shrink: 0;
    width: var(--sidebar-width);

    & > * {
      transform: none;
    }
  }

  ${mediaQueries.large} {
    transform: none;
  }
`;
