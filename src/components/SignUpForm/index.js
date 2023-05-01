import React from 'react';
import styles from './SignForm.module.css';
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
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            pass: '',
            error: null
        }
    }

    changeHadler = ({ target: { value, name } }) => {
        this.setState({
            [name]: value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
       
        try {
            const result = signUpSCHEMA.validateSync(this.state);
            console.log(result);
        } catch (error) {
        this.setState({
            error
        })
        }
    }

    render() {
        const { firstName, lastName, email, pass , error} = this.state;
        return (
            <form className={styles.form} onSubmit={this.submitHandler}>
                <input type="text" name="firstName" value={firstName} onChange={this.changeHadler} />
                <input type="text" name="lastName" value={lastName} onChange={this.changeHadler} />
                <input type="text" name="email" value={email} onChange={this.changeHadler} />
                <input type="password" name="pass" value={pass} onChange={this.changeHadler} />
                {error && <p>{error.message}</p>}
                <button>Submit</button>
            </form>
        );
    }
}

export default SignUpForm;

/*
Зробити форму з двома інпутами - email, pass
*/