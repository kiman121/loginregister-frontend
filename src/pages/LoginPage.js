import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Link } from 'react-router-dom';

import PageWrapper from '../components/PageWrapper';
import Alert from '../components/Alert';

import * as userActions from '../actions/userActions';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) navigate('/home');
  }, [userInfo, navigate]);

  const inputFieldChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    dispatch(userActions.login(email, password));
  };

  return (
    <PageWrapper className='background'>
      <div className='form-box login'>
        <h1>Login</h1>
        {error && <Alert type='error'>{error}</Alert>}
        <Form onSubmit={formSubmitHandler}>
          <div className='input-group'>
            <div className='input-field'>
              <i className='fa-solid fa-envelope'></i>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={inputFieldChangeHandler}
                required
              />
            </div>

            <div className='input-field'>
              <i className='fa-solid fa-lock'></i>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={inputFieldChangeHandler}
                required
              />
            </div>

            <p>
              Forgot <Link to='forgot-password'>password!</Link>
            </p>
          </div>
          <div className='btn-field'>
            <Link to='register'>Create an account</Link>
            <button className='btn-submit' type='submit'>
              {loading ? 'Login in...' : 'Login'}
            </button>
          </div>
        </Form>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;
