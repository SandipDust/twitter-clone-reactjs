import React from 'react';
import './Login.css';
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from '@material-ui/core';
import {auth, provider} from "./firebase";
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';



function Login() {

    const[state, dispatch] = useStateValue();
    const signIn=()=>{
        //sign in
        auth.signInWithPopup(provider)
        .then(result =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
            
        }).catch(error => alert(error.message))
    }
    return (
        <div className="login">
            
            <div className="login__logo">
                <TwitterIcon className="login__twitterIcon"/>
                <h1>See what’s happening in <br/> the world right now</h1>
                <p>Join Twitter today.</p>
            </div>
           
        
            <Button className="login__button" type="submit" onClick={signIn}>
                    Sign In
                </Button>

        </div>
      
    )
}

export default Login;
