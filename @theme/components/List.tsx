import React from 'react';
import styled from 'styled-components';
import {
  fontSize,
  FontSizeProps,
  lineHeight,
  LineHeightProps,
  padding,
  PaddingProps,
} from 'styled-system';

export const List = styled.ul<
  React.PropsWithChildren<FontSizeProps & LineHeightProps & PaddingProps>
>`
  list-style: none;
  ${fontSize}
  ${lineHeight}
  ${padding}

  & > li {
    position: relative;
    margin: 4px 0;
  }
`;

List.defaultProps = {
  fontSize: '16px',
  lineHeight: '26px',
  paddingLeft: '0',
};
