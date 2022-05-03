import React from 'react';
import styled from 'styled-components';
import { Box, Row, Link } from '@theme/components';
import { ThinTile } from '@theme/ui';

const CardImageContainer = styled(Box)`
  margin-bottom: 20px;
`;

const CardTile = styled(ThinTile)`
  padding: 0;
  margin: 0;
  overflow: hidden;
  border: none;

  span {
    display: block;
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  display: block;
  min-height: 116px;
  height: 116px;
`;

export const CardImage = ({ src, alt }: { src: string; alt?: string }) => {
  return (
    <CardImageContainer>
      <CardTile>
        <StyledImage alt={alt} src={src} />
      </CardTile>
    </CardImageContainer>
  );
};

export const CardTitle = styled.span`
  text-align: left;
  margin-top: 4px;
  padding-bottom: 4px;
  line-height: 24px;
`;

export const CardDescription = styled(CardTitle)`
  font-size: var(--sail-font-size-15);
  line-height: 20px;
  color: var(--sail-color-gray-700);
`;

export const CardIconName = styled(Box)`
  margin-left: 8px;
  text-transform: uppercase;
  font-size: var(--sail-font-size-12);
  line-height: 16px;
  font-weight: var(--medium-font-weight);
  color: var(--sail-color-gray-500);
`;

export const CardFooter = styled(Row)`
  padding-top: 20px;
  margin-top: auto;
  align-items: center;
`;

export const Card = styled(Box)`
  padding-bottom: 24px;
  border-bottom: 1px solid var(--sail-color-gray-100);
`;

const Tile = ({
  children,
  to,
  className,
}: React.PropsWithChildren<{ className?: string; to?: string }>) => {
  return (
    <ThinTile className={className}>
      <Link to={to}>{children}</Link>
    </ThinTile>
  );
};

export const SimpleCard = styled(Tile)`
  ${CardTitle} {
    display: block;
    margin: 0;
  }

  ${CardDescription} {
    line-height: 21px;
    padding: 4px 0 0 0;
    margin: 0;
  }
`;
