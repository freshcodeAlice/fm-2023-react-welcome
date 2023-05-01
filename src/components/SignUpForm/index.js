import React from 'react';
import styles from './SignForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const signUpSCHEMA = yup.object({
    firstName: yup.string().min(2, 'FirstName must be more than 2 letter').max(5).required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    pass: yup.string().required()
})


function SignUpForm(props) {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        pass: ''
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signUpSCHEMA}
            onSubmit={(values, actions) => {
                console.log(values);
                console.log(actions);
            }}>
            {(formikProps) => {
                console.log(formikProps);
                const { values: { firstName, lastName, email, pass } } = formikProps;
                return (
                    <Form className={styles.form}>
                        <Field name="firstName" />
                        {/* {formikProps.errors && <p>{formikProps.errors.firstName}</p>} */}
                        <ErrorMessage name="firstName" component="p" className={styles['error-message']} />
                        <Field name="lastName" />
                        <ErrorMessage name="lastName" />
                        <Field name="email" />
                        <ErrorMessage name="email" />
                        <Field type="password" name="pass" />
                        <ErrorMessage name="pass" />
                        <button>Submit</button>
                    </Form>

                )
            }}
        </Formik>
    );
}

export default SignUpForm;

/*
Зробити форму з двома інпутами - email, pass
*/