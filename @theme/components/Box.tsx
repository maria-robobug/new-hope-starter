import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps, flexGrow, FlexGrowProps } from 'styled-system';

export default styled.div<SpaceProps & FlexGrowProps>`
  display: flex;
  flex-direction: column;
  ${space}
  ${flexGrow}
`;
