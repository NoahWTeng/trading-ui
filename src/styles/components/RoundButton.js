import styled from 'styled-components';

export const RoundButton = styled.button`
  border: 0;
  min-width: 48px;
  min-height: 48px;
  border-radius: 100%;
  background: #fff;
  box-shadow: ${props => !props.disabled && '0px 0px 15px 4px #f2f2f2'};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 20px;
    width: 20px;
  }
`;
