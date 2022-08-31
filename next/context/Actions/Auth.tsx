import * as types from '../Constant/Auth';

export const setLoginSuccess = (data: { type: string; payload: any }) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: data,
  };
};

export const setLoading = (data: any) => ({
  type: types.LOADING,
  payload: data,
});

export const setLoginFailure = (error: any) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

export const setRegisterSuccess = (data: any) => ({
  type: types.REGISTER_SUCCESS,
  payload: data,
});
export const setRegisterFailure = (error: any) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});

export const setEmailVerifySuccess = (data: any) => ({
  type: types.EMAIL_VERIFICATION_SUCCESS,
  payload: data,
});
export const setEmailVerifyFailure = (error: any) => ({
  type: types.EMAIL_VERIFICATION_FAILURE,
  payload: error,
});

export const setLogout = () => ({ type: types.LOGOUT });

export const authStatusSuccess = (data: any) => ({
  type: types.AUTH_STATUS,
  payload: data,
});

export const forgotPasswordSuccess = (data: any) => ({
  type: types.AUTH_RESET_PASSOWRD_SUCCESS,
  payload: data,
});
export const forgotPasswordFailure = (error: any) => ({
  type: types.AUTH_RESET_PASSOWRD_FAILURE,
  payload: error,
});

export const setPasswordSuccess = (data: any) => ({
  type: types.AUTH_SET_NEW_PASSOWRD_SUCCESS,
  payload: data,
});
export const setPasswordFailure = (error:any) => ({
  type: types.AUTH_SET_NEW_PASSOWRD_FAILURE,
  payload: error,
});

export const clearGlobalState = () => ({ type: types.CLEAR_GLOBAL_STATE });
export const clearAuthState = () => ({ type: types.CLEAR_AUTH_STATE });
