import React from 'react';
import { Loader } from '@components';
import { Text } from '@styles';
import logo from '@static/svg/logo.svg';

import {
  Container,
  Logo,
  Left,
  Right,
  Form,
  FormContainer,
  Input,
  ErrorMessage,
  InputButtom,
} from './components';

export const Login = () => {
  return (
    <Container>
      <Left>
        <Logo src={logo} alt="Trading Logo" />
        Hello
        {/* <FormContainer>
            <Text poppins mb h4 line="24px" margin="30px">
              Welcome!
            </Text>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder="E-mail" {...register('email', { required: true })} />
              {errors.email && <ErrorMessage>This field is required</ErrorMessage>}
              <Input placeholder="Password" {...register('password', { required: true })} />
              {errors.password && <ErrorMessage>This field is required</ErrorMessage>}
              <InputButtom type="submit" value="Log in" />
              {user.error && <ErrorMessage>*{user.error}</ErrorMessage>}
            </Form>
          </FormContainer> */}
      </Left>
    </Container>
  );
};
