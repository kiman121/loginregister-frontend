import axios from 'axios';

import * as userConstants from '../constants/userConstants';
import { actionError } from '../utils/generalUtils';

const backendDomain = process.env.REACT_APP_BACKEND_DOMAIN;

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${backendDomain}/api/v1/users/login`,
      { email, password },
      config
    );

    const { data: user } = data;

    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: user });

    localStorage.setItem('userInfo', JSON.stringify(user));
  } catch (error) {
    dispatch(actionError(userConstants.USER_LOGIN_FAIL, error));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: userConstants.USER_LOGOUT });
};

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${backendDomain}/api/v1/users`,
      formData,
      config
    );

    const { data: user } = data;
    dispatch({ type: userConstants.USER_REGISTER_SUCCESS, payload: user });

    dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: user });

    localStorage.setItem('userInfo', JSON.stringify(user));
  } catch (error) {
    dispatch(actionError(userConstants.USER_REGISTER_FAIL, error));
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.FORGOT_PASSORD_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.post(
      `${backendDomain}/api/v1/users/forgot-password`,
      { email },
      config
    );

    dispatch({ type: userConstants.FORGOT_PASSORD_SUCCESS });
  } catch (error) {
    dispatch(actionError(userConstants.FORGOT_PASSORD_FAIL, error));
  }
};

export const resetPassword = (formData, token) => async (dispatch) => {
  try {
    dispatch({ type: userConstants.PASSWORD_RESET_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.patch(
      `${backendDomain}/api/v1/users/reset-password/${token}`,
      formData,
      config
    );

    dispatch({ type: userConstants.PASSWORD_RESET_SUCCESS });
  } catch (error) {
    dispatch(actionError(userConstants.PASSWORD_RESET_FAIL, error));
  }
};
