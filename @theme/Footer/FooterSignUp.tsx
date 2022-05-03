import React from 'react';
import { Box, Link } from '@theme/components';
import styled from 'styled-components';

const SignUpTitle = styled.span`
  margin-top: 8px;
  font-size: 14px;
  font-weight: var(--medium-font-weight);
`;

const SignUpInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 520px;
  border-radius: 4px;
  min-height: 36px;
  margin-top: 8px;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px;
`;

const SignUpInput = styled.input`
  font-size: 14px;
  line-height: 20px;
  padding: 8px 12px;
  border: none;
  background: transparent;
  flex: 1 1 auto;
  z-index: 1;
`;

const SignUpButton = styled.button`
  background: transparent;
  font-size: 16px;
  line-height: 28px;
  font-weight: var(--medium-font-weight);
  color: var(--secondary-text-color);
  display: inline-flex;
  border: none;
  padding: 4px 12px;
  box-sizing: border-box;
`;

const SubTitleContainer = styled(Box)`
   font-size: 12px;
   line-height: 16px;
   margin-top: 8px;
`

export default () => {
  return (
    <Box>
      <SignUpTitle>Sign up for developer updates:</SignUpTitle>
      <SignUpInputContainer>
        <SignUpInput />
        <SignUpButton>Sign up</SignUpButton>
      </SignUpInputContainer>
      <SubTitleContainer>
        <span>
          You can unsubscribe at any time. Read our <Link to={'https://stripe.com/privacy'}>privacy policy</Link>.
        </span>
      </SubTitleContainer>
    </Box>
  );
};
