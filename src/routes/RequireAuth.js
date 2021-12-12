import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const RequireAuth = ({ children }) => {
  const user = useSelector(state => state.user);

  return user.isAuth ? children : <Navigate to="/login" />;
};
