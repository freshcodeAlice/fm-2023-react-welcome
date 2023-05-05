import React, { useState, useReducer } from 'react';
import Spinner from '../Spinner';


/* Редьюсер - ЧИСТА ФУНКЦІЯ
1. Детермінована - за одних і тих вхідних даних має повертати одне і те саме значення
(РЕДЬЮСЕР НІКОЛИ НЕ МУТУЄ ОБ'ЄКТ СТАНУ)
2. Без побічних ефектів  
(НІКОЛИ НЕ РОБИМО ЗАПИТІВ НА СЕРВЕР)
*/

function reducer(state, action) {
    switch (action.type) {
        case 'firstName':
        case 'lastName':
        case 'email':
        case 'password':
        case 'birthday':
        case 'gender': {
            return {
                ...state,
                [action.type]: action.value
            }
        }
        case 'FORM SUBMITTED': {
            return {
                ...state,
                 isFetching: true
            }
        }
        default:
            return state;
    }


    // Повертає новий об'єкт стану
}

const Index = () => {
    const [state, dispatch] = useReducer(reducer, {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: '',
        gender: '',
        isFetching: false
    });


    const changeHandler = ({ target: { name, value } }) => {
        const action = {
            type: name,
            value
        }
        dispatch(action);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: 'FORM SUBMITTED'
        })
    }



    const { firstName, lastName, email, password, birthday, isFetching } = state;
    return (
        <form>
            {isFetching && <Spinner />}
            <input name="firstName" value={firstName} onChange={changeHandler} />
            <input name="lastName" value={lastName} onChange={changeHandler} />
            <input name="email" value={email} onChange={changeHandler} />
            <input name="password" type="password" value={password} onChange={changeHandler} />
            <input name="birthday" value={birthday} onChange={changeHandler} />
            <p>Gender</p>
            <label><input name="gender" type="radio" onChange={changeHandler} value="Male" />Male</label>
            <label><input name="gender" type="radio" onChange={changeHandler} value="Female" />Female</label>
            <label><input name="gender" type="radio" onChange={changeHandler} value="Non-binary" />Non-binary</label>
            <button onClick={submitHandler}>Submit</button>
        </form>
    );
}

export default Index;


/*
useReducer

*/