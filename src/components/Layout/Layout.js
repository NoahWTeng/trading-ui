import React, { memo } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 96px auto;
  @media (min-width: 1000px) {
    grid-template-columns: 256px auto;
  }
`;

export const Layout = memo(({ children }) => {
  return <Container>{children}</Container>;
});
