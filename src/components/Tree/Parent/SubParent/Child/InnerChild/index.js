import React from 'react';
import UserContext from '../../../../../../contexts/UserContext';

const InnerChild = (props) => {
  // const {user: {firstName, lastName}}= props;
    return (
        <UserContext.Consumer>
            {([user, logOut]) => {
                return (
                <div style={{border: '2px solid black', padding: '10px'}}>
                <p>InnerChild</p>
                 { user && <h2>{user.firstName} {user.lastName}</h2>  }
                 <button onClick={logOut}>LogOut</button>
                </div>
                )
            }}
        </UserContext.Consumer>
        
    );
}

export default InnerChild;
