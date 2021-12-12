import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 0.1fr auto;
  grid-gap: 20px;
  margin: 15px 25px;
  @media (min-width: 1300px) {
    margin: 30px 25px;
  }
`;
