import React, {useContext} from 'react';
import UserMenu from './UserMenu';
import styles from './Header.module.css';
import ThemeContext from '../../contexts/ThemeContext';
import CONSTANSTS from '../../constants';
import cx from 'classnames';
import Switch from '@mui/material/Switch';
import withTheme from '../../HOCs/withTheme';

const { THEMES } = CONSTANSTS;

function Header(props) {
    const [theme, setTheme] = useContext(ThemeContext);


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


export default Header;
