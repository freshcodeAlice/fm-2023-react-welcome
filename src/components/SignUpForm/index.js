import React from 'react';
import styles from './SignForm.module.css';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const signUpSCHEMA = yup.object({
    firstName: yup.string().min(2, 'FirstName must be more than 2 letter').max(5).required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
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
                        <Field name="lastName" />
                        <Field name="email">
                            {({
                                field, // { name, value, onChange, onBlur }
                                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                meta,
                            }) => (
                                <div>
                                    <input type="text" placeholder="Email" {...field} />
                                    {meta.touched && meta.error && (
                                        <div className="error">{meta.error}</div>
                                    )}
                                </div>
                            )}
                        </Field>
                        <Field type="password" name="pass" />
                        {/* {error && <p>{error.message}</p>} */}
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