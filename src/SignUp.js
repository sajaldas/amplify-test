import React, { Component } from 'react'
import { Auth } from 'aws-amplify';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            //phone: '',
            confirmationCode: '',
            signedUp: false,            
        }
    }

    handleChange = (e) => {
        console.log(e.target.id);
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleFormSubmit = () => {
        const { username, email, password, signedUp, confirmationCode } = this.state

        if(!signedUp)
        {
            Auth.signUp({
                username,
                password,
                attributes: {
                    email                
                }
            })
            .then((data) => {
                console.log('data = ', data);
                if(data.__type)
                console.log('error');
                else if(data.UserSub)
                {
                    console.log('success');
                    this.setState({signedUp: true})
                }
            })
            .catch(err => console.log(err))
        }
        else
        {
            Auth.confirmSignUp(username, confirmationCode, {                
                forceAliasCreation: true    
            }).then(data => console.log(data))
              .catch(err => console.log(err));
        }        
    }

    render() {
        return (
            <div className="signupform">
                <form>
                    <div className="formrow">
                        <label>Username</label>
                        <input type="text" id="username" onChange={this.handleChange} />
                    </div>
                    <div className="formrow">
                        <label>Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="formrow">
                        <label>Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="formrow">
                        <label>Phone</label>
                        <input type="text" id="phone" onChange={this.handleChange} />
                    </div>
                    <div className="formrow">
                        <label> </label>
                        <input type="button" id="btnsubmit" value="Sign Up" onClick={() => this.handleFormSubmit()} />                        
                    </div>
                </form>
            </div>
        )
    }

}


export default SignUp