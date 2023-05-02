import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import styles from './SignIn.module.scss';
import * as yup from 'yup';
import CustomField from '../CustomField';

const SignInSHEMA = yup.object({
    email: yup.string().email('Email address is not correct').required(),
    password: yup.string().min(5).max(16).required()
})

const SignIn = (props) => {
    return (
        <div>
            <h1>Login to Your Account</h1>
            <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={props.onSubmitCallback}
            validationSchema={SignInSHEMA}>
                {(formikProps) => {
                    return (
                        <Form className={styles['form-container']}>
                            {/* <label htmlFor="mail">Email Address</label>
                            <Field name="email" type="text" id="mail"/>
                            <ErrorMessage name="email" component="p" className={styles['error-message']}/> */}
                            <label htmlFor="mail">Email Address</label>
                            <CustomField name="email" type="text" id="mail"/>

                            <label htmlFor="pass">Password</label>
                            {/* <Field name="password" type="password" id="pass"/>
                            <ErrorMessage name="password"  component="p" className={styles['error-message']}/> */}
                            <CustomField name="password" type="password" id="pass" />
                            <button type="submit">Login &#10230;</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default SignIn;



/*
1. Реалізувати форму логіна
(Два інпути: 
    - email
    - password)
Зробити за допомогою Formik
Валідація за допомогою yup



*/