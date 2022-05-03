import React from 'react';
import styled from 'styled-components';
import FooterLinks from '@theme/Footer/FooterLinks';
import FooterSignUp from '@theme/Footer/FooterSignUp';

export default function Footer() {
  return (
    <FooterContainer data-component-name="Footer/Footer">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <FooterLinks/>
        <FooterSignUp/>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  max-width: var(--footer-width);
  margin: auto;
  padding: 32px 0;
  margin-top: 100px;
  box-shadow: inset 0 1px rgb(227, 232, 238);
  font-size: 1rem;
  flex-shrink: 0;
  a,
  a:hover {
    color: var(--link-color);
  }
`;
