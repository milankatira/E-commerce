import React, { createContext, useReducer, useContext } from 'react';

import Auth from './Reducer/Auth';

import { LoginApi } from '../api/Auth';

import { authStatusSuccess, setLoading } from './Actions/Auth';

import Router from 'next/router';

export const Authcontext = createContext({
  signUp: { data: null, error: null },
  SignIn: { data: null, error: null },
  authUser: null,
  authError: null,
  authStatus: null,
  forgotPassword: { data: null, error: null },
  newPassword: { data: null, error: null },
  verifyEmail: { data: null, error: null },
  loading: true,
});

//!TODO INITIAL STATE

const initialState = {
  signUp: { data: null, error: null },
  SignIn: { data: null, error: null },
  authUser: null,
  authError: null,
  authStatus: null,
  forgotPassword: { data: null, error: null },
  newPassword: { data: null, error: null },
  verifyEmail: { data: null, error: null },
  loading: true,
};

function AuthProvider(props: JSX.IntrinsicAttributes & React.ProviderProps<{ signUp: { data: null; error: null; }; SignIn: { data: null; error: null; }; authUser: null; authError: null; authStatus: null; forgotPassword: { data: null; error: null; }; newPassword: { data: null; error: null; }; verifyEmail: { data: null; error: null; }; loading: boolean; }>) {
  const [auth, dispatch] = useReducer(Auth, initialState);

  const LoginUser = (packet: any) => {
    dispatch(setLoading(true));
    LoginApi(packet)
      .then((res: { data: any; }) => {
        Router.push('/home');
        dispatch(setLoading(false));
        dispatch(authStatusSuccess(res.data));
      })
      .catch((err) => {
        dispatch(setLoading(false));
      });
  };

  // const AuthUser = () => {
  //   dispatch(setLoading(true));
  //   AuthUserApi()
  //     .then((res) => {
  //       dispatch(setLoading(false));
  //       Router.push('/home');
  //       dispatch(authStatusSuccess(res.data));
  //     })
  //     .catch((err) => {
  //       dispatch(setLoading(false));
  //     });
  // };

  const Auth_api = {
    LoginUser,
    // AuthUser,
  };

  const authData = { auth, dispatch, Auth_api };

  return <Authcontext.Provider value={authData} {...props} />;
}

function useAuthcontext() {
  return useContext(Authcontext);
}

export { AuthProvider, useAuthcontext };
