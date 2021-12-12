import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHotels } from '@actions';
import { Loader } from '@components';

import { Container, Left, Right } from './styles';

const Dashboard = () => {
  if (isFetching) return <Loader />;
  return (
    <Container>
      <Left>LEFT</Left>
      <Right>RIGHT</Right>
    </Container>
  );
};

export default Dashboard;
