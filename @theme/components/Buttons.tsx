import styled from 'styled-components';
import { Button } from '@theme/components';

type GetStartedButtonProps = {
  variant?: 'outlined' | 'transparent';
};

const isTransparent = (props: GetStartedButtonProps) =>
  props.variant !== 'outlined';

  // TODO: rename button
export const GetStartedButton = styled(Button).attrs({
  arrow: true,
})<GetStartedButtonProps>`
  align-self: flex-start;
  ${(props) =>
    isTransparent(props) &&
    `
    color: var(--link-color);
    background: transparent;
    box-shadow: none;
  `}
`;
