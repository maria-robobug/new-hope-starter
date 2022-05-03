import React from 'react';
import styled from 'styled-components';

interface LayoutConfig {
  navbar: React.ReactNode;
  footer: React.ReactNode;
}

export function RootLayout({
  navbar,
  children,
}: React.PropsWithChildren<LayoutConfig>) {
  return (
    <Wrapper data-component-name="Layout/RootLayout">
      {navbar}
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: var(--text-color);
  font-family: var(--font-family);
`;
