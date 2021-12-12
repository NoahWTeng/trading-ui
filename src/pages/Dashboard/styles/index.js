import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  @media (min-width: 1500px) {
    grid-template-columns: 1.4fr 1fr;
  }
`;

export const Left = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
`;
export const Right = styled.div``;

export const LeftContainer = styled.div`
  display: flex;
  grid-template-columns: auto auto;
  gap: 20px;
`;
