import React from 'react';
import styled from 'styled-components';
import Footer from '@theme/Footer/Footer';

interface PageLayoutProps {
  sidebar?: React.ReactNode;
}

export function PageLayout({
  sidebar,
  children,
}: React.PropsWithChildren<PageLayoutProps>) {
  return (
    <Container data-component-name="Layout/PageLayout">
      {sidebar}
      <ContentContainer>
        {children}
        <Footer/>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--background-color);
  min-height: calc(100vh - var(--navbar-height));
`;

const ContentContainer = styled.div`
  flex: 1 0 0;
  /*
    flex-basis is ignored for nested flex in Chrome, need to set width
    See more here: https://stackoverflow.com/a/34355447
  */
  width: 0;
  max-width: 100%;
  padding: 36px 48px 32px 48px;
  max-width: 1175px;
  box-sizing: border-box;
  margin: auto;
`;
