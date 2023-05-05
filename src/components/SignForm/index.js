import React, {useState, useReducer} from 'react';


/* Редьюсер - ЧИСТА ФУНКЦІЯ
1. Детермінована - за одних і тих вхідних даних має повертати одне і те саме значення
(РЕДЬЮСЕР НІКОЛИ НЕ МУТУЄ ОБ'ЄКТ СТАНУ)
2. Без побічних ефектів  
(НІКОЛИ НЕ РОБИМО ЗАПИТІВ НА СЕРВЕР)
*/

function reducer(state, action) {
    console.log(action);
    return {...state}; // Повертає новий об'єкт стану
}

const Index = () => {
    const [state, dispatch] = useReducer(reducer);


    const submitAction = (event) => {
        event.preventDefault();
        dispatch({
            test: 'value'
        })
    }



    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [birthday, setBirthday] = useState('');
    // const [gender, setGender] = useState('');

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

    return (
        <form>
            {/* <input name="firstName" value={firstName} onChange={changeHandler}/>
            <input name="lastName" value={lastName} onChange={changeHandler}/>
            <input name="email" value={email} onChange={changeHandler}/>
            <input name="password" type="password" value={password} onChange={changeHandler}/>
            <input name="birthday" value={birthday} onChange={changeHandler}/>
            <p>Gender</p>
           <label><input name="gender" type="radio" onChange={changeHandler} value="Male"/>Male</label> 
           <label><input name="gender" type="radio" onChange={changeHandler} value="Female" />Female</label> 
           <label><input name="gender" type="radio" onChange={changeHandler} value="Non-binary"/>Non-binary</label>  */}
            <button onClick={submitAction}>Submit</button>
        </form>
    );
}

export default Index;


/*
useReducer

*/