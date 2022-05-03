import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
`;

export default ({ menu }) => {
  return <Nav>{menu}</Nav>;
};
