import styled from 'styled-components';
import { UniversalLink } from '@theme/ui/UniversalLink';

export const MenuLink = styled(UniversalLink).attrs(() => ({
  'data-component-name': 'Sidebar/MenuLink'
}))`
  text-decoration: none;
  color: var(--sidebar-text-color);

  &&.external-url:after {
    content: none;
  }
`;
