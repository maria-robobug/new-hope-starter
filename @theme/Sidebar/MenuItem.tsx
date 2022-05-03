import React from 'react';
import styled from 'styled-components';
import { MenuItemProps } from '@portal/Sidebar/types';
import { MenuLinkItem } from '@theme/Sidebar/MenuLinkItem';
import { ExternalIcon } from '@theme/Sidebar/ExternalIcon';
import { MenuItemLabel } from '@theme/Sidebar/MenuItemLabel';
import { SeparatorLine } from '@theme/Sidebar/SeparatorLine';

const StyledMenuItem = styled(MenuLinkItem)`
  color: var(--text-color);
  font-weight: var(--medium-font-weight);
`;

export function MenuItem({ item }: MenuItemProps) {
  return (
    <Wrapper data-component-name="Sidebar/MenuItem">
      <StyledMenuItem item={item}>
        <MenuItemLabel active={item.active}>
          {item.label}
          {item.external ? <ExternalIcon /> : null}
        </MenuItemLabel>
      </StyledMenuItem>

      {item.separatorLine ? <SeparatorLine /> : null}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
