import styled from 'styled-components';
import { Button } from '@theme/ui';

export default styled(Button)`
  line-height: inherit;
  background: transparent;
  font-family: var(--font-family);
  color: var(--link-color);
  text-align: left;

  &:hover {
    color: var(--sail-color-gray-900);
  }
`;
