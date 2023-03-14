import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Link } from 'react-router-dom';

import PageWrapper from '../components/PageWrapper';
import Alert from '../components/Alert';

import * as userActions from '../actions/userActions';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const resetPassword = useSelector((state) => state.resetPassword);
  const { loading, error, status } = resetPassword;

  const inputFieldChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  useEffect(() => {
    if (status === 'done') {
      setTimeout(() => {
        navigate('/');
      }, 3500);
    }
  }, [status, navigate]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userActions.resetPassword(formData, params.token));
  };

  return (
    <PageWrapper className='background'>
      <div className='form-box forgot-password'>
        <h1>Reset Password</h1>
        {loading && <p>Loading</p>}
        {error && <Alert type='error'>{error}</Alert>}
        {status === 'done' ? (
          <p>Your password has been reset Successfully.</p>
        ) : (
          <Form onSubmit={formSubmitHandler}>
            <div className='input-group'>
              <div className='input-field'>
                <i className='fa-solid fa-lock'></i>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={formData.password}
                  onChange={inputFieldChangeHandler}
                />
              </div>
              <div className='input-field'>
                <i className='fa-solid fa-lock'></i>
                <input
                  type='password'
                  placeholder='Confirm password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={inputFieldChangeHandler}
                />
              </div>
            </div>
            <div className='btn-field'>
              <button className='btn-submit' type='submit'>
                Reset Password
              </button>
            </div>
          </Form>
        )}
      </div>
    </PageWrapper>
  );
};

export default ResetPassword;
