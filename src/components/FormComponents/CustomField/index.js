import { Field} from 'formik';
import styles from './CustomField.module.scss';
import cx from 'classnames';

import React from 'react';

const CustomField = (props) => {
    return (
        <>
        <Field {...props}>
            {({field, form, meta}) => {
                const cn = cx(styles.input, {
                    [styles.invalid]: meta.touched && meta.error

                });
                return (
                    <>
                    <input {...field} className={cn}/>
                   {meta.touched && meta.error && <p className={styles['error-message']}>{meta.error}</p>}
                    </>
                )
            }}
        </Field>
        </>
    );
}

export default CustomField;

/*


<Field name="email" type="text" id="mail"/>
<ErrorMessage name="email" component="p" className={styles['error-message']}/>


*/