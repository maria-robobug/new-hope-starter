import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { Grid } from '@theme/components';

export default styled(Grid)<SpaceProps>`
  position: relative;
  grid-template-columns: repeat(3, minmax(200px, 33%));
  grid-gap: 20px;
  margin-top: 20px;
  ${space}
`;
