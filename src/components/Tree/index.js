import React, { Component } from 'react';
import Parent from './Parent';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Tree.module.css';
import CONSTANSTS from '../../constants';
import cx from 'classnames';

const {THEMES} = CONSTANSTS;

const Tree = (props) => {
    return (
        <ThemeContext.Consumer>
            {([theme]) => {
                const cn = cx({
                    [styles.dark]: theme === THEMES.DARK,
                    [styles.light]: theme === THEMES.LIGHT
                });
                return (
                    <div className={cn}>
                        <p>Tree</p>
                        <Parent />
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    );
}

export default Tree;


/*
Робота з контекстом

+1. Створити об'єкт контексту
+2. Надати (provide) значення контексту тій частині дерева компонент, яка від цих даних залежить
+3. Підключити компоненту, яка використовує дані, до контексту


*/