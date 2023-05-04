import React, {useContext} from 'react';
import UserContext from '../../../contexts/UserContext';
import withUser from '../../../HOCs/withUser';

const UserMenu = (props) => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div>
            {user && <img src={user.avatar} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />}
            <button onClick={setUser}>LogOut</button>
        </div>
    );
}

export default UserMenu;
