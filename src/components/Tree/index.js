import React, { useContext } from 'react';
import Parent from './Parent';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './Tree.module.css';
import CONSTANSTS from '../../constants';
import withTheme from '../../HOCs/withTheme';
import cx from 'classnames';

const { THEMES } = CONSTANSTS;

const Tree = (props) => {
    const [theme, setTheme] = useContext(ThemeContext);

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

}

export default Tree;
