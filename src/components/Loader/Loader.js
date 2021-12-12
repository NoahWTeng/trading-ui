import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import { Text } from '@styles';

import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  text-align: center;
  position: ${props => props.absolute && 'absolute'};
`;

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Loader = memo(({ fullScreen }) => {
  return (
    <Container absolute={fullScreen}>
      <Wrapper>
        <ReactLoading type={'balls'} color="#80819194" delay={1} />
        <Text h4 grey opac1>
          Loading
        </Text>
      </Wrapper>
    </Container>
  );
});

Loader.propTypes = {
  fullScreen: PropTypes.bool,
};
