import React from 'react';
import UserMenu from './UserMenu';
import styles from './Header.module.css';
import ThemeContext from '../../contexts/ThemeContext';
import CONSTANSTS from '../../constants';
import cx from 'classnames';
import Switch from '@mui/material/Switch';
import withTheme from '../../HOCs/withTheme';

const { THEMES } = CONSTANSTS;

function Header(props) {
    const themeToggler = () => {
        props.setTheme(props.theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
    }

    const cn = cx({
        [styles.dark]: props.theme === THEMES.DARK,
        [styles.light]: props.theme === THEMES.LIGHT
    });
console.log(props);
    return (
        <div className={cn}>
            <UserMenu />
            <Switch
                checked={props.theme === THEMES.DARK}
                onChange={themeToggler}
            />
        </div>
    )
}


// const HeaderWithTheme = (props) => {
//     return (
//         <ThemeContext.Consumer>
//             {([theme, setTheme]) => {
//                return <Header theme={theme} setTheme={setTheme} />
//             }}
//         </ThemeContext.Consumer>
//     )
// }

const HeaderWithTheme = withTheme(Header);




export default HeaderWithTheme;
