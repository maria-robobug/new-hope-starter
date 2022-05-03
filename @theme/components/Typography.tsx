import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps, lineHeight, LineHeightProps } from 'styled-system';

const fontSizes = {
  h1: '32px',
  h2: '24px',
  p: '19px',
};

const getFontWeight = (variant) => {
  switch (variant) {
    case 'p':
      return '400';
    default:
      return '700';
  }
};

type TypographyProps = React.PropsWithChildren<
  {
    variant?: 'h1' | 'h2' | 'h3' | 'p';
    fontWeight?: string;
    fontSize?: string;
    className?: string;
  } & SpaceProps &
    LineHeightProps
>;

const StyledTypography = styled.div<TypographyProps>`
  font-size: ${({ variant, fontSize }) => fontSize || fontSizes[variant]};
  font-weight: ${({ variant, fontWeight }) =>
    fontWeight || getFontWeight(variant)};
  margin: 0;
  ${space}
  ${lineHeight}
`;

StyledTypography.defaultProps = {
  variant: 'h1',
};

export default ({ children, ...props }: TypographyProps) => {
  return (
    <StyledTypography as={props.variant} {...props}>
      {children}
    </StyledTypography>
  );
};
