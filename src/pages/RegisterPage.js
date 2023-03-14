import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Link } from 'react-router-dom';

import PageWrapper from '../components/PageWrapper';
import Alert from '../components/Alert';

import * as userActions from '../actions/userActions';

const RegisterPage = () => {
  const initialFormData = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error } = userRegister;

  const inputFieldChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userActions.register(formData));
    setFormData(initialFormData);
  };

  return (
    <PageWrapper className='background'>
      <div className='form-box register'>
        <h1>Register</h1>
        {loading && <p>Loading</p>}
        {error && <Alert type='error'>{error}</Alert>}
        <Form onSubmit={formSubmitHandler}>
          <div className='input-group'>
            <div className='input-field'>
              <i className='fa-solid fa-user'></i>
              <input
                type='text'
                placeholder='First Name'
                name='firstName'
                value={formData.firstName}
                onChange={inputFieldChangeHandler}
              />
            </div>

            <div className='input-field'>
              <i className='fa-solid fa-user'></i>
              <input
                type='text'
                placeholder='Middle Name'
                name='middleName'
                value={formData.middleName}
                onChange={inputFieldChangeHandler}
              />
            </div>

            <div className='input-field'>
              <i className='fa-solid fa-user'></i>
              <input
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={formData.lastName}
                onChange={inputFieldChangeHandler}
              />
            </div>

            <div className='input-field'>
              <i className='fa-solid fa-envelope'></i>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={inputFieldChangeHandler}
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
              />
            </div>
          </div>
          <div className='btn-field'>
            <Link to='/'>I have an account</Link>
            <button className='btn-submit' type='submit'>
              Register
            </button>
          </div>
        </Form>
      </div>
    </PageWrapper>
  );
};

export default RegisterPage;
