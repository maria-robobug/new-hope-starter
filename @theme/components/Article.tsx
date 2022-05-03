import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
  width: 100%;
  margin: auto;

  p {
    line-height: 26px;
  }
`;

const ArticleContainer = styled.div`
  width 100%;
`;

export default ({ children }) => {
  return (
    <Article>
      <ArticleContainer>{children}</ArticleContainer>
    </Article>
  );
};
