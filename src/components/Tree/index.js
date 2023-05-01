import React, { Component } from 'react';
import Parent from './Parent';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Tree.module.css';
import CONSTANSTS from '../../constants';
import withTheme from '../../HOCs/withTheme';
import cx from 'classnames';

const { THEMES } = CONSTANSTS;

const Tree = (props) => {
    const cn = cx({
        [styles.dark]: props.theme === THEMES.DARK,
        [styles.light]: props.theme === THEMES.LIGHT
    });

    return (
        <div className={cn}>
            <p>Tree</p>
            <Parent />
        </div>
    )
}


// const TreeWithTheme = (props) => {
//     return (
//     <ThemeContext.Consumer>
//         {([theme, setTheme]) => {
//             return <Tree theme={theme} setTheme={setTheme}/>
//         }}
//     </ThemeContext.Consumer>
//     )
// }




    const TreeWithTheme = withTheme(Tree);

export default TreeWithTheme;


/*
Робота з контекстом

+1. Створити об'єкт контексту
+2. Надати (provide) значення контексту тій частині дерева компонент, яка від цих даних залежить
+3. Підключити компоненту, яка використовує дані, до контексту


*/