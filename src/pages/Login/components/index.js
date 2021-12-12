import styled from 'styled-components';

import backgroundLogin from '@static/img/login-background.png';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  background-image: url(${backgroundLogin});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Logo = styled.img``;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

// export const Right = styled.div`
//   background-image: url(${imgRight});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
// `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 256px;
  gap: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 56px;
  border-radius: 8px;
  padding: 18px 23px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #e4e4e4;
  :focus {
    border: 2px solid #6c5dd3;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  font-family: 'Inter';
  color: #ff754c;
`;

export const InputButtom = styled.input`
  height: 56px;
  border-radius: 8px;
  padding: 18px 23px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  background-color: #1b1d21;
  border: 0px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #6c5dd3;
  }
`;
