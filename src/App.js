import React, { Component } from 'react'
import './App.css';

import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
//import { withAuthenticator } from 'aws-amplify-react'

import SignUp from './SignUp'
import SignIn from './SignIn'

Amplify.configure(awsconfig)

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showLoginForm: false
    }
  }

  handleFormToggle = () => {
    //const {toggleState} = this.state.showLoginForm;
    //console.log('toggleState = ', this.state.showLoginForm);
    this.setState({showLoginForm: !this.state.showLoginForm})
  }

  render() {
    return (
      <div className="App">
        {
          (this.state.showLoginForm) ? <SignIn /> : <SignUp />
        }                
        <div className="toggleform">
          <a href="#" onClick={this.handleFormToggle}>{(this.state.showLoginForm) ? 'No Account, Sign Up' : 'Have an accout, Sign In'}</a>
        </div>
      </div>
    );
  }

}

export default App;
