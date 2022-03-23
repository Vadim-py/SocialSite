import React, { Component } from 'react';
import '../../static/css/Login.scss'

class Login extends Component{
    render(){
        return(
            <form className='formLog'>
                <label>
                    <input type='text'/>
                </label>
                <br/>
                <label>
                    <input type='password'/>
                </label>
                <br/>
                <input type="submit" value="Войти" />
            </form>
        );
    }
}

export default Login;