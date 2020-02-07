import React, { Component } from 'react'
import { Auth } from 'aws-amplify';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',            
            signedIn: false,
        }
    }

    handleChange = (e) => {
        //console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleFormSubmit = () => {
        const { email, password } = this.state
        // console.log('email = ', email)
        // console.log('password = ', password)
        Auth.signIn({
            username: email,
            password: password
        })
            .then((data) => {
                console.log('after login data = ', data);
                if (data.message)
                    console.log('error');
                else if (data.username) {
                    console.log('success');
                    this.setState({ signedIn: true })
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        const { signedIn } = this.state

        if (signedIn) {
            return (
                <div>You are signed in!</div>
            )
        }
        else {
            return (
                <div className="signupform">                   
                    <form>
                        {/* <div className="formrow">
                        <label>Username</label>
                        <input type="text" id="username" onChange={this.handleChange} />
                    </div> */}
                        <div className="formrow">
                            <label>Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div className="formrow">
                            <label>Password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>
                        {/* <div className="formrow">
                        <label>Phone</label>
                        <input type="text" id="phone" onChange={this.handleChange} />
                    </div> */}
                        <div className="formrow">
                            <label> </label>
                            <input type="button" id="btnsubmit" value="Sign In" onClick={() => this.handleFormSubmit()} />
                        </div>
                    </form>
                </div>
            )
        }
    }
}


export default SignIn