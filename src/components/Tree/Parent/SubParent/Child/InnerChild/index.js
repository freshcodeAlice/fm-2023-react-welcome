import React from 'react';
import UserContext from '../../../../../../contexts/UserContext';

const InnerChild = (props) => {
  // const {user: {firstName, lastName}}= props;
    return (
        <UserContext.Consumer>
            {(value) => {
                return (
                <div style={{border: '2px solid black', padding: '10px'}}>
                <p>InnerChild</p>
                 <h2>{value.firstName} {value.lastName}</h2> 
                </div>
                )
            }}
        </UserContext.Consumer>
        
    );
}

export default InnerChild;
