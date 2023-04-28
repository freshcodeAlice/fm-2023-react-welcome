import React from 'react';
import UserContext from '../../../contexts/UserContext';

const UserMenu = () => {
    return (
        <div>
            <UserContext.Consumer>
                {([user, logOut]) => {
                   return (<>
                   {user && <img src={user.avatar} style={{width: '50px', height: '50px', borderRadius: '50%'}} /> }
                    <button onClick={logOut}>LogOut</button>
                    </>
                   )
                }}
            </UserContext.Consumer>
        </div>
    );
}

export default UserMenu;
