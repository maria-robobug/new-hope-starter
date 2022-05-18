import React from 'react';
import styled from 'styled-components';
import { Flex } from '@theme/ui/Flex';
import { mediaQueries } from '@portal/media-css';
import { TileText } from '@theme/ui/Tiles/TileText';
import { TileHeader } from '@theme/ui/Tiles/TileHeader';

type TextAlign = 'left' | 'right' | 'center' | 'justify';

export interface TileProps {
  header?: string;
  icon?: string;
  children?: string;
  to?: string;
  target?: string;
  headerAlign?: TextAlign;
  textAlign?: TextAlign;
  bgColor?: string;
  bgImage?: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  maxWidth?: string;
}

const ThinTileWrapper = styled.div<{ bgColor?: string; bgImage?: string }>`
  display: flex;
  flex-direction: column;
  border-radius: var(--card-border-radius);
  box-sizing: border-box;
  transition: box-shadow 0.2s ease-in-out;
  padding: 18px;
  text-decoration: none;
  width: 100%;
  border: 1px solid var(--sail-color-gray-100);
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : 'none')};
  background-repeat: no-repeat;

  :hover {
    box-shadow: 0 0 0 1px rgba(50, 50, 93, 0.01),
    0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.02);
  }

  ${mediaQueries.small} {
    width: calc(50% - 20px);
  }
  ${mediaQueries.medium} {
    width: 250px;
  }
  ${mediaQueries.large} {
    width: 100%;
  }

  &.external-url {
    :after {
      display: none;
    }
  }
`;

const ThinTileIcon = styled.img`
  width: 90px;
  ${mediaQueries.medium} {
    width: 80px;
  }
`;

const ThinTileHeader = styled(TileHeader)<{ align?: TextAlign }>`
  font-size: 24px;
  text-align: ${({ align }) => align || 'center'};
`;

const ThinTileText = styled(TileText)<{ icon?: string; align?: TextAlign }>`
  font-size: 18px;
  line-height: 1.5;
  flex-shrink: 0;
  font-family: var(--font-family);
  ${({ icon }) =>
    icon
      ? `
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 8;
  `
      : ''};
`;

export class ThinTile extends React.Component<TileProps> {
  render() {
    const {
      header,
      icon,
      children,
      to,
      target,
      headerAlign,
      textAlign,
      bgColor,
      bgImage,
      color,
      className,
      style,
    } = this.props;

    return (
      <ThinTileWrapper
        to={to}
        target={target}
        color={color}
        className={className}
        style={style}
        data-component-name="ui/Tiles/ThinTile"
      >
        {(icon || header) && (
          <Flex flexDirection="column">
            {icon && (
              <Flex
                flexShrink={0}
                height={{ xs: 'auto', small: '100px', medium: '110px' }}
                alignItems="center"
                justifyContent="center"
                mb="25px"
              >
                <ThinTileIcon src={icon} />
              </Flex>
            )}
            {header && (
              <ThinTileHeader
                align={headerAlign}
                color={color}
                data-cy={`Thin-${header}`}
              >
                {header}
              </ThinTileHeader>
            )}
          </Flex>
        )}
        {children && (
          <ThinTileText icon={icon} align={textAlign} color={color}>
            {children}
          </ThinTileText>
        )}
      </ThinTileWrapper>
    );
  }
}
