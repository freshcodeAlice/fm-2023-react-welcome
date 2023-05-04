import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner';
import useData from '../../hooks/useData';
/*
Користувацький хук — це JavaScript-функція, ім’я якої починається з ”use”, і яка може викликати інші хуки */

function UserLoader (props) {
    const {data, isFetching, error} = useData(() => fetch('/users.json').then(res => res.json())
    );
        

 return( 
            <div>
                {isFetching && <Spinner />}
                {error && <div> OOOPS </div>}
               <ul>
                {data.map(u => <li>{u.firstName} {u.lastName} </li>)}
                </ul> 
            </div>
        );
  
}

export default UserLoader;
