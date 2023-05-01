import React from 'react';
import UserContext from '../../../../../../contexts/UserContext';
import ThemeContext from '../../../../../../contexts/ThemeContext';
import Switch from '@mui/material/Switch';
import CONSTANSTS from '../../../../../../constants';
import withTheme from '../../../../../../HOCs/withTheme';
import withUser from '../../../../../../HOCs/withUser';

const { THEMES } = CONSTANSTS;

const InnerChild = (props) => {
     const {user, theme, setTheme, setUser}= props;
    const themeToggler = () => {
        setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
    }

    return (
        <div style={{ border: 'inherit', padding: '10px' }}>
            <p>InnerChild</p>
            {user && <h2>{user.firstName} {user.lastName}</h2>}
            <button onClick={setUser}>LogOut</button>
            {/* <button onClick={themeToggler}>Change Theme</button> */}
            <Switch
                checked={theme === THEMES.DARK}
                onChange={themeToggler} />
        </div>
    )
}


export default withUser(withTheme(InnerChild));
