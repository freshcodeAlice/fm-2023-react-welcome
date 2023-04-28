import React, { Component } from 'react';
import Parent from './Parent';


const Tree = (props) => {
    return (
        <div style={{border: '2px solid black', padding: '10px'}}>
             <p>Tree</p>
            <Parent />
        </div>
    );
}

export default Tree;


/*
Робота з контекстом

+1. Створити об'єкт контексту
+2. Надати (provide) значення контексту тій частині дерева компонент, яка від цих даних залежить
3. Підключити компоненту, яка використовує дані, до контексту


*/