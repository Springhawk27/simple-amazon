import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    // const { user, signInUsingGoogle } = useFirebase();
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();

    const history = useHistory();

    // console.log('came from', location.state?.from);
    const redirect_uri = location.state?.from || '/shop'

    const handleGoogleLogin = () => {

        signInUsingGoogle()
            .then(result => {
                // console.log(result.user);
                history.push(redirect_uri);
            })

    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>New To Amazon <Link to="/register">Create Account</Link></p>
                <div>----------or----------</div>
                <button
                    // onClick={signInUsingGoogle}
                    onClick={handleGoogleLogin}
                    className="regular-button"
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;