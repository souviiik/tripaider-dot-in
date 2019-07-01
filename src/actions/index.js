import axios from 'axios';
import { AUTH_USER, AUTH_ERR, ACCN_VERIFY_ERR, ACCN_VERIFY, FORGOT_PASSWORD, FORGOT_PASSWORD_FAILED, UPDATE_PASSWORD, UPDATE_PASSWORD_FAILED } from '../constants';

const ROOT_URL = 'http://tripaider.in/api/users';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${ROOT_URL}/signup`,
      formProps
    );
    
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERR,
      payload: "Email in use already."
    });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      `${ROOT_URL}/login`,
      formProps
    );
    
    dispatch({
      type: AUTH_USER,
      payload: response.data
    });
    
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERR,
      payload: "Invalid login credentials."
    });
  }
};

export const logout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ""
  };
};

export const accountVerification = (email, callback) => async dispatch => {
  try {
    const response = await axios.get(
      `${ROOT_URL}/verify/${email}`
    );
    
    dispatch({
      type: ACCN_VERIFY,
      payload: response.data.token
    });

    callback();
  } catch (e) {
    dispatch({
      type: ACCN_VERIFY_ERR,
      payload: "Email address not found!"
    });
  }
};

export const forgotPassword = ( {username}, callback ) => async dispatch => {
 console.log("email ", username);
  try {
    const response = await axios.get(
      `${ROOT_URL}/forgetpassword/${username}`
    );
    
    dispatch({
      type: FORGOT_PASSWORD,
      payload: response
    });

    callback();
  } catch (e) {
    dispatch({
      type: FORGOT_PASSWORD_FAILED,
      payload: "Email address not found!"
    });
  }
};

export const updatePassword = ( { old_password, new_password }, callback ) => async dispatch => {
//  console.log("formProps ", formProps);
  try {
    const response = await axios.put(`${ROOT_URL}/changepassword`, {
      headers: {
          'Authorization': localStorage.getItem("token")
      },
      old_password,
      new_password
    });
    
    dispatch({
      type: UPDATE_PASSWORD,
      payload: response
    });

    callback();
  } catch (e) {
    dispatch({
      type: UPDATE_PASSWORD_FAILED,
      payload: "Email address not found!"
    });
  }
};
