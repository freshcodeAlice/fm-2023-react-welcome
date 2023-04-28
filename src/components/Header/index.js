import React from 'react';
import UserMenu from './UserMenu';
import styles from './Header.module.css';
import ThemeContext from '../../contexts/ThemeContext';
import CONSTANSTS from '../../constants';
import cx from 'classnames';
import Switch from '@mui/material/Switch';

const {THEMES} = CONSTANSTS;

const Header = () => {
    return (
        <ThemeContext.Consumer>
            {([theme, setTheme]) => {

                 const themeToggler = () => {
                    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
                }

                const cn = cx({
                    [styles.dark]: theme === THEMES.DARK,
                    [styles.light]: theme === THEMES.LIGHT
                });

                return (
                <div className={cn}>
                    <UserMenu />
                    <Switch 
                       checked={theme === THEMES.DARK}
                       onChange={themeToggler}
                        />
                </div>
                )
            }}
        </ThemeContext.Consumer>
    );
}

export default Header;
