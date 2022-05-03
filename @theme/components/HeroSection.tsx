import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { Row } from '@theme/components';

export const HeroSection = styled(Row).attrs({ alignItems: 'center' })``;

export const HeroImage = styled.img<SpaceProps>`
  width: 500px;
  height: 100%;
  position: relative;
  bottom: 1px;
  ${space}
`;
