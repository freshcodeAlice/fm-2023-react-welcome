import React, { useState, useEffect, useReducer } from 'react';
import Spinner from '../Spinner';
import {format} from 'date-fns';
import { initialState, reducer } from '../../reducers/form_reducer';
import CONSTANSTS from '../../constants';
const {ACTIONTYPES} = CONSTANSTS;

/*
Зробити компоненту з 5 інпутами, 
кнопкною відправки
кнопкою скидання форми (ресет), яка має очистити всі поля
кнопкою, яка підвантажує дані з json-файлика

*/



const Index = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
       if(state.isFetching) {
        fetch('/userData.json')
        .then(res => res.json())
        .then(data => {
           dispatch({
            type: ACTIONTYPES.AUTOCOMPLETE_SUCCESS,
            value: data
           })
        })
        .catch(error => {
            dispatch({
                type: ACTIONTYPES.AUTOCOMPLETE_ERROR,
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
            type: ACTIONTYPES.RESET_FORM
        })
    }

    const autocomplete = (event) => {
        event.preventDefault();
        dispatch({
            type: ACTIONTYPES.AUTOCOMPLETE_REQUEST
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

