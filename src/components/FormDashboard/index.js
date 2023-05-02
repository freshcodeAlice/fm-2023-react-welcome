import React from 'react';
import styles from './FormContainer.module.scss';

const FormContainer = () => {
    return (
        <div className={styles.wrapper}>
            <h1>SignUp</h1>
            <form>
            <input />
            <input />
            <button>Submit</button>
            </form>
        </div>
    );
}

export default FormContainer;
