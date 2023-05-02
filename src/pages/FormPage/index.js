import React, { Component } from 'react';
import SignIn from '../../components/FormComponents/SignIn';
import SignUp from '../../components/FormComponents/SignUp';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signIn: true
        }
    }

    submitToServer = (data) => {
        console.log(data);
    }

    btnHandler = () => {
        this.setState({
            signIn: !this.state.signIn
        })
    }
    
    render() {
        const {signIn} = this.state;
        const btnText = signIn ? 'SignUp' : 'Login';
        return (
            <>
            <button onClick={this.btnHandler}>{btnText}</button>
            {signIn ? <SignIn onSubmitCallback={this.submitToServer}/> : <SignUp  onSubmitCallback={this.submitToServer}/>}
            </>
        );
    }
}

export default Index;
