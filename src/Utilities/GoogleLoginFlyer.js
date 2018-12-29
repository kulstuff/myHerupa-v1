import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class LoginFlyer extends Component {
    render(){
        return(
            <div className='google-login-box'>
                <GoogleLogin
                    clientId='610134153194-ve36jlhungd3uanhhf42klo68e314o55.apps.googleusercontent.com'
                    buttonText='LogIn'
                    onSuccess='responseGoogle'
                    onFailure='responseGoogle'
                />
            </div>
        )
    }
}

export default LoginFlyer;