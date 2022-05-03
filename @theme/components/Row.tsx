import styled from 'styled-components';
import { alignItems, AlignItemsProps } from 'styled-system';
import { Box } from '@theme/components';

export default styled(Box)<AlignItemsProps>`
  flex-direction: row;
  ${alignItems}
`;
