import React from 'react';
import UserMenu from './UserMenu';
import styles from './Header.module.css';
import ThemeContext from '../../contexts/ThemeContext';
import CONSTANSTS from '../../constants';
import cx from 'classnames';
import Switch from '@mui/material/Switch';

const { THEMES } = CONSTANSTS;

class Header extends React.Component {


    themeToggler = () => {
        const [theme, setTheme] = this.context;
        setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
    }

    render() {
        const [theme, setTheme] = this.context;

        const cn = cx({
            [styles.dark]: theme === THEMES.DARK,
            [styles.light]: theme === THEMES.LIGHT
        });

        return (
            <div className={cn}>
                <UserMenu />
                <Switch
                    checked={theme === THEMES.DARK}
                    onChange={this.themeToggler}
                />
            </div>
        )
    }

}


Header.contextType = ThemeContext;

export default Header;
