import styled from 'styled-components';

export const Input = styled.input`
  height: 56px;
  background: #fafafa;
  border-radius: 8px;
  padding: 18px 23px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  border: 0px;
  :focus {
    background-color: white;
  }
  ::placeholder {
    color: #b2b3bd;
  }
`;
