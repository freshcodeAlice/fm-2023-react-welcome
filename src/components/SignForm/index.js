import React, { useState, useEffect, useReducer } from 'react';
import Spinner from '../Spinner';
import {format} from 'date-fns';


/* Редьюсер - ЧИСТА ФУНКЦІЯ
1. Детермінована - за одних і тих вхідних даних має повертати одне і те саме значення
(РЕДЬЮСЕР НІКОЛИ НЕ МУТУЄ ОБ'ЄКТ СТАНУ)
2. Без побічних ефектів  
(НІКОЛИ НЕ РОБИМО ЗАПИТІВ НА СЕРВЕР)
*/


/*
Зробити компоненту з 5 інпутами, 
кнопкною відправки
кнопкою скидання форми (ресет), яка має очистити всі поля
кнопкою, яка підвантажує дані з json-файлика

*/
const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: new Date(),
    isFetching: false,
    error: null
}


function reducer(state, action) {
    switch (action.type) {
        case 'firstName':
        case 'lastName':
        case 'email':
        case 'password': {
            return {
                ...state,
                [action.type]: action.value
            }
        }
        case 'birthday':{
            return {
                ...state,
                birthday: new Date(action.value)
            }
        }
        case 'RESET_FORM': {
            return {...initialState}
        }
        case 'AUTOCOMPLETE_REQUEST' : {
            return {
                ...state,
                isFetching: true
            }
        }
        case 'AUTOCOMPLETE_SUCCESS' : {
            return {
                ...state,
                ...action.value,
                birthday: new Date(action.value.birthday),
                isFetching: false,
            }
        }
        case 'AUTOCOMPLETE_ERROR' : {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }

        default:
            return state;
    }


    // Повертає новий об'єкт стану
}

const Index = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
       if(state.isFetching) {
        fetch('/userData.json')
        .then(res => res.json())
        .then(data => {
           dispatch({
            type: 'AUTOCOMPLETE_SUCCESS',
            value: data
           })
        })
        .catch(error => {
            dispatch({
                type: 'AUTOCOMPLETE_ERROR',
                error
            })
        })
       }
    }, [state.isFetching]);


    const changeHandler = ({ target: { name, value } }) => {
        const action = {
            type: name,
            value
        }
        dispatch(action);
    }

    const submitHandler = (event) => {
        event.preventDefault();
       console.log(state);
    }

    const resetForm = (event) => {
        event.preventDefault()
        dispatch({
            type: 'RESET_FORM'
        })
    }

    const autocomplete = (event) => {
        event.preventDefault();
        dispatch({
            type: 'AUTOCOMPLETE_REQUEST'
        })
    }


    const { firstName, lastName, email, password, birthday, isFetching, error } = state;
    return (
        <form>
            {isFetching && <Spinner />}
            {error && <div>Ops, autocomplete failed</div>}
            <input name="firstName" value={firstName} onChange={changeHandler} />
            <input name="lastName" value={lastName} onChange={changeHandler} />
            <input name="email" value={email} onChange={changeHandler} />
            <input name="password" type="password" value={password} onChange={changeHandler} />
            <input name="birthday" type="date" value={format(birthday, "yyyy-MM-dd")} onChange={changeHandler} />
            
            <button onClick={submitHandler}>Submit</button>
            <button onClick={resetForm}>Reset</button>
            <button onClick={autocomplete}>Complete</button>
        </form>
    );
}

export default Index;

