import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
  width: 100%;
  border-radius: 24px;
  box-shadow: 0px 0px 20px 0px #f2f2f2;
  height: ${props => props.height};
`;
