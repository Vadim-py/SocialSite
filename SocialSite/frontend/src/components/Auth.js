import React, { Component } from 'react';
import { render } from "react-dom";
import Nav from './Nav';

class Auth extends Component {
    render() {
      return (
        <div>
            <Nav/>
            </div>
      );
    }
  }
  
export default Auth;

const container = document.getElementById("auth");
render(<Auth />, container);