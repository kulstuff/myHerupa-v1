import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class LoginFlyer extends Component {
    render(){
        return(
            <div className='google-login-box'>
                <div className = 'login_catch-flyerpane'>
                    <div className = 'login_catch-flyerpane-side login_catch-flyerpane-side-left'>
                        <div className = 'login_catch-flyerpane-side-heading'>Attendance Manager</div>
                        <div className = 'login_catch-flyerpane-side-content'>
                            Manage your attendance for self reference
                        </div>
                    </div>
                    <div className = 'login_catch-flyerpane-side login_catch-flyerpane-side-right'>
                        <div className = 'login_catch-flyerpane-side-heading'>Webkiosk +</div>
                        <div className = 'login_catch-flyerpane-side-content'>
                            SignUp to get notified whenever new marks come along. Also illustrative insights on your accademic performance
                        </div>
                    </div>
                </div>
                <div className = 'auth_signup'>
                    <GoogleLogin
                        clientId='610134153194-ve36jlhungd3uanhhf42klo68e314o55.apps.googleusercontent.com'
                        buttonText='LogIn'
                        onSuccess='responseGoogle'
                        onFailure='responseGoogle'
                        className = 'googleSignInButton'
                    />
                </div>
            </div>
        )
    }
}

export default LoginFlyer;