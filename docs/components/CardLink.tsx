import { Link, Box } from '@theme/components';
import styled from 'styled-components';

export const CardIcon = styled(Box)`
  svg {
    fill: var(--sail-color-blue-400);
  }
`;

export const CardTitle = styled(Box).attrs({ className: 'margin-top--16' })`
  color: var(--sail-color-blue-400);
  font-size: var(--font-size);
  font-weight: var(--bold-font-weight);
`;

export const CardDescription = styled(Box).attrs({
  className: 'margin-top--4',
})`
  line-height: 24px;
  font-size: var(--font-size);
  color: var(--text-color);
`;

export const CardLink = styled(Link)`
  text-align: left;
`;
