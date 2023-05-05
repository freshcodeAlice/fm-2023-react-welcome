import React, {useState, useReducer} from 'react';


/* Редьюсер - ЧИСТА ФУНКЦІЯ
1. Детермінована - за одних і тих вхідних даних має повертати одне і те саме значення
(РЕДЬЮСЕР НІКОЛИ НЕ МУТУЄ ОБ'ЄКТ СТАНУ)
2. Без побічних ефектів  
(НІКОЛИ НЕ РОБИМО ЗАПИТІВ НА СЕРВЕР)
*/

function reducer(state, action) {
  switch(action.type) {
    case 'firstName': {
        return {
            ...state,
            firstName: action.value
        }
    }
    case 'lastName': {
        return {
            ...state, 
            lastName: action.value
        }
    }
    case 'email': {
        return {
            ...state, 
            email: action.value
        }
    }
    case 'password': {
        return {
            ...state, 
            password: action.value
        }
    }
    case 'birthday': {
        return {
            ...state, 
            birthday: action.value
        }
    }
    case 'gender': {
        return {
            ...state, 
            gender: action.value
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
        gender: ''
    });


    const changeHandler = ({target: {name, value}}) => {
        const action = {
            type: name,
            value
        }
        dispatch(action);
    }

    // const changeHandler = ({target: {name, value}}) => {
    //    switch(name) {
    //     case 'firstName': {
    //         setFirstName(value);
    //         break;
    //     }
    //     case 'lastName': {
    //         setLastName(value);
    //         break;
    //     }
    //     case 'email': {
    //         setEmail(value);
    //         break;
    //     }
    //     case 'password': {
    //         setPassword(value);
    //         break;
    //     }
    //     case 'birthday': {
    //         setBirthday(value);
    //         break;
    //     }
    //     case 'gender': {
    //         setGender(value);
    //     }
    //    }
    // }

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     console.log({
    //         firstName,
    //         lastName,
    //         email,
    //         password,
    //         gender
    //     })
    // }

   const {firstName, lastName, email, password, birthday} = state;
    return (
        <form>
            <input name="firstName" value={firstName} onChange={changeHandler}/>
            <input name="lastName" value={lastName} onChange={changeHandler}/>
            <input name="email" value={email} onChange={changeHandler}/>
            <input name="password" type="password" value={password} onChange={changeHandler}/>
            <input name="birthday" value={birthday} onChange={changeHandler}/>
            <p>Gender</p>
           <label><input name="gender" type="radio" onChange={changeHandler} value="Male"/>Male</label> 
           <label><input name="gender" type="radio" onChange={changeHandler} value="Female" />Female</label> 
           <label><input name="gender" type="radio" onChange={changeHandler} value="Non-binary"/>Non-binary</label>  
            <button >Submit</button>
        </form>
    );
}

export default Index;


/*
useReducer

*/