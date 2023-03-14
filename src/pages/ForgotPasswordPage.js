import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Link } from 'react-router-dom';

import PageWrapper from '../components/PageWrapper';
import Alert from '../components/Alert';

import * as userActions from '../actions/userActions';
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const forgotPassword = useSelector((state) => state.forgotPassword);
  const { loading, error, status } = forgotPassword;

  const inputFieldChangeHandler = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userActions.forgotPassword(email));
  };

  return (
    <PageWrapper className='background'>
      <div className='form-box forgot-password'>
        <h1>Forgot Password</h1>
        {loading && <p>Loading</p>}
        {error && <Alert type='error'>{error}</Alert>}
        {status === 'done' ? (
          <p>Your reset token has been sent to your email.</p>
        ) : (
          <>
            <p>Enter your email address</p>
            <Form onSubmit={formSubmitHandler}>
              <div className='input-group'>
                <div className='input-field'>
                  <i className='fa-solid fa-envelope'></i>
                  <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={inputFieldChangeHandler}
                  />
                </div>
              </div>
              <div className='btn-field'>
                <Link to='/'>Back to login</Link>
                <button className='btn-submit' type='submit'>
                  Send Recovery Email
                </button>
              </div>
            </Form>
          </>
        )}
      </div>
    </PageWrapper>
  );
};

export default ForgotPasswordPage;
