import React from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CopyRight from '../components/CopyRight';
import styled from 'styled-components';

const loginScheme = Yup.object().shape({
    email: Yup.string()
        .email('Invalid E-mail format')
        .required('Email is required'),
    password: Yup.string()
        .required("Password is required")
})

const LogIn = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <LoginPage>
            <div>
                <h4>Log In Formik</h4>
                <Formik
                    initialValues={initialCredentials}
                    validationSchema={loginScheme}
                    onSubmit={
                        async (values) => {
                            await new Promise((r) => setTimeout(r, 1000))
                            alert(JSON.stringify(values, null, 2))
                            await localStorage.setItem('credentials', values)
                        }
                    }>
                    {({
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        isValid,
                        handleChange,
                        handleBlur }) => (
                        <Form className='form'>
                            <label htmlFor='email'>Email</label>
                            <Field
                                id="email"
                                type="email"
                                name="email"
                                placeholder="ejemplo@gmail.com" />
                            <label htmlFor='password'>Password</label>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                                placeholder="password" />

                            <button type='submit'>Log In</button>
                        </Form>
                    )}
                </Formik>
                <div className='copy'>
                    <CopyRight />
                </div>
            </div>
        </LoginPage>

    );
}

export default LogIn;

const LoginPage = styled.div`
    height: 100%;
    width: 100%;
    .form{
        display: inline;
        border: 2px solid red;
        display: flex;
        flex-direction: column;
    }

    .copy{
        
    }

`

