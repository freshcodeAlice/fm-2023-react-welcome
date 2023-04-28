import React from 'react';
import UserContext from '../../../../../../contexts/UserContext';
import ThemeContext from '../../../../../../contexts/ThemeContext';
import CONSTANSTS from '../../../../../../constants';
const {THEMES} = CONSTANSTS;

const InnerChild = (props) => {
  // const {user: {firstName, lastName}}= props;
    return (
       <ThemeContext.Consumer>
        {([theme, changeTheme]) => {
            const themeToggler = () => {
                changeTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
            }

            return (
                <UserContext.Consumer>
                {([user, logOut]) => {
                    return (
                    <div style={{border: 'inherit', padding: '10px'}}>
                    <p>InnerChild</p>
                     { user && <h2>{user.firstName} {user.lastName}</h2>  }
                     <button onClick={logOut}>LogOut</button>
                     <button onClick={themeToggler}>Change Theme</button>
                    </div>
                    )
                }}
            </UserContext.Consumer>
            )
        }}
       </ThemeContext.Consumer>
        
    );
}

export default InnerChild;
