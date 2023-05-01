import React from 'react';
import UserContext from '../../../contexts/UserContext';
import withUser from '../../../HOCs/withUser';

const UserMenu = (props) => {
    return (
        <div>
            {props.user && <img src={props.user.avatar} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />}
            <button onClick={props.setUser}>LogOut</button>
        </div>
    );
}

export default withUser(UserMenu);
