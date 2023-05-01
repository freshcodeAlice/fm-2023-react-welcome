import React from 'react';
import styles from './SignForm.module.css';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';

const signUpSCHEMA = yup.object({
    firstName: yup.string().min(2, 'FirstName must be more than 2 letter').max(5).required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    pass: yup.string().required()
})


class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        
    }

  
//     submitHandler = (event) => {
//         event.preventDefault();
       
//         try {
//  //           const result = signUpSCHEMA.validateSync(this.state);
//             console.log(result);
//         } catch (error) {
//         // this.setState({
//         //     error
//         // })
//         }
//     }

    render() {
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
                    const {values: {firstName, lastName, email, pass }} = formikProps;
                    return (
                        // <form className={styles.form} onSubmit={formikProps.handleSubmit}>
                        <Form className={styles.form}>
                        {/* <input type="text" name="firstName" value={firstName} onChange={formikProps.handleChange} /> */}
                        <Field name="firstName" />
                        <Field name="lastName" />
                        <Field name="email" />
                        <Field type="password" name="pass" />
                        {/* {error && <p>{error.message}</p>} */}
                        <button>Submit</button>
                        </Form>
                    // </form>
                    )
                }}
            </Formik>
        );
    }
}

export default SignUpForm;

/*
Зробити форму з двома інпутами - email, pass
*/