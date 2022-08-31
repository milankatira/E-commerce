import React from 'react';
import Login from '../components/auth/Login';
import { AuthProvider } from '../context/AuthContext';
const login = () => {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
};

export default login;
