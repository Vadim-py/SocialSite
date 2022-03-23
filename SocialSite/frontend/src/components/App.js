import React, { Component } from 'react';
import { render } from "react-dom";
import Nav from './Nav';
import Block from './Block'
import Login from './Login'
import Auth from './Auth'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
      return (
        
        <div>
            <Block />
            <Login />
            </div>
      );
    }
  }
  
export default App;

const container = document.getElementById("app");
render(<App />, container);