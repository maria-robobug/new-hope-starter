import styled from 'styled-components';
import { Row, Link } from '@theme/components';

export default styled(Row)`
  padding: 12px;
  box-sizing: border-box;
  border-radius: var(--sail-radius);
  box-shadow: 0 0 0 1px var(--sail-color-gray-100);
  white-space: pre;
  font-size: var(--sail-font-size-14);
  line-height: 26px;
  margin: 16px 0 4px;

  ${Link} {
    color: var(--sail-color-blue-500);
  }
`;