import React from 'react';
import { Box, Link } from '@theme/components';
import styled from 'styled-components';

const FooterLink = styled(Box)`
  margin-left: 8px;
  margin-top: 12px;
  flex-direction: row;
  font-size: 14px;
  white-space: pre;
`;

const QuestionsIcon = () => {
  return (
    <svg
      aria-hidden="true"
      height="16"
      width="16"
      style={{ color: 'rgb(79, 86, 107)' }}
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.756-13.908l-1.283 1.561C9.743 3.238 8.9 3 8 3s-1.744.238-2.473.653L4.244 2.092a7.037 7.037 0 0 0-2.152 2.152l1.561 1.283C3.238 6.257 3 7.1 3 8s.238 1.744.653 2.473l-1.561 1.283a7.037 7.037 0 0 0 2.152 2.152l1.283-1.561C6.257 12.762 7.1 13 8 13s1.744-.238 2.473-.653l1.283 1.561a7.037 7.037 0 0 0 2.152-2.152l-1.561-1.283C12.762 9.743 13 8.9 13 8s-.238-1.744-.653-2.473l1.561-1.283a7.037 7.037 0 0 0-2.152-2.152zM8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0-1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
    </svg>
  );
};

const TutorialIcon = () => {
  return (
    <svg
      aria-hidden="true"
      style={{ color: 'rgb(79, 86, 107)' }}
      fill="currentColor"
      height="16"
      width="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm11 4l2.18-1.883a.5.5 0 0 1 .82.385v7.002a.5.5 0 0 1-.82.385L13 10z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

const ProductChangelogIcon = () => {
  return (
    <svg
      aria-hidden="true"
      style={{ color: 'rgb(79, 86, 107)' }}
      fill="currentColor"
      height="16"
      width="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 0v5a2 2 0 0 0 2 2h5v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2 0l5 5H9z"></path>
    </svg>
  );
};

const IconContainer = styled.div`
  margin-right: 12px;
`;

export default () => {
  return (
    <Box>
      <FooterLink>
        <IconContainer>
          <QuestionsIcon />
        </IconContainer>
        Questions? <Link to={'https://support.stripe.com/'}>Contact us.</Link>
      </FooterLink>
      <FooterLink>
        <IconContainer>
          <TutorialIcon />
        </IconContainer>
        View developer tutorials on{' '}
        <Link to={'https://www.youtube.com/stripedevelopers/'}>YouTube.</Link>
      </FooterLink>
      <FooterLink>
        <IconContainer>
          <ProductChangelogIcon />
        </IconContainer>
        Check out our{' '}
        <Link to={'https://stripe.com/blog/changelog'}>product changelog.</Link>
      </FooterLink>
    </Box>
  );
};
