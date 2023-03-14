import * as userConstants from '../constants/userConstants';

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN_REQUEST:
      return { loading: true };

    case userConstants.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case userConstants.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case userConstants.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      return { loading: true };

    case userConstants.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case userConstants.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.FORGOT_PASSORD_REQUEST:
      return { loading: true, status: 'initialized' };

    case userConstants.FORGOT_PASSORD_SUCCESS:
      return { loading: false, status: 'done' };

    case userConstants.FORGOT_PASSORD_FAIL:
      return { loading: false, status: 'failed', error: action.payload };

    default:
      return state;
  }
};

export const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case userConstants.PASSWORD_RESET_REQUEST:
      return { loading: true, status: 'initialized' };

    case userConstants.PASSWORD_RESET_SUCCESS:
      return { loading: false, status: 'done' };

    case userConstants.PASSWORD_RESET_FAIL:
      return { loading: false, status: 'failed', error: action.payload };
    default:
      return state;
  }
};
