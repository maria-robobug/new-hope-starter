import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  color: white;
  font-family: var(--font-family);
  font-weight: var(--medium-font-weight);
  font-size: 14px;
  background: var(--link-color);
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(84 105 212) 0px 0px 0px 1px,
    rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(60 66 87 / 8%) 0px 2px 5px 0px;
  border-radius: 4px;
  min-height: 28px;
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  box-sizing: border-box;
  text-decoration: none;
`;

const Arrow = () => (
  <svg
    aria-hidden="true"
    height="12"
    width="12"
    style={{ marginLeft: '10px' }}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.583 7L7.992 2.409A1 1 0 1 1 9.407.993l6.3 6.3a1 1 0 0 1 0 1.414l-6.3 6.3a1 1 0 0 1-1.415-1.416L12.583 9H1a1 1 0 1 1 0-2z"
      fillRule="evenodd"
      fill='currentColor'
    ></path>
  </svg>
);

export default ({
  children,
  arrow,
  to,
  ...props
}: React.PropsWithChildren<{ arrow?: boolean, to?: string, className?: string, as?: string }>) => {
  return (
    <Button href={to ? to : '#'} {...props}>
      {children} {arrow ? <Arrow /> : null}
    </Button>
  );
};
