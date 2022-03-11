import React, { useRef } from 'react';
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendSignInLinkToEmail,
    isSignInWithEmailLink, signInWithEmailLink} from "firebase/auth";

import './SignIn.css';

const SignIn =() => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signUp = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const actionCodeSettings = {
        url: window.location.href,
        //url: 'https://test-diveboard.firebaseapp.com',
        handleCodeInApp: true,
    };
        sendSignInLinkToEmail(auth,
            email,
            actionCodeSettings).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err);
        })
    }

    // commented below for signing UP in via email and password
    // const signUp = e => {
    //     e.preventDefault();
    //     createUserWithEmailAndPassword( auth,
    //         emailRef.current.value,
    //         passwordRef.current.value).then(user => {
    //             console.log(user)
    //     }).catch(err => {
    //         console.log(err);
    //     })
    //  }

    const signIn = async (e) => {
        e.preventDefault()

        if (isSignInWithEmailLink(auth, emailRef.current.value)) {

            let email = emailRef.current.value.getItem('emailForSignIn');
            if (!email) {
                email = window.prompt('Please provide your email for confirmation');
            }

            signInWithEmailLink(auth, email, window.location.href)
                .then((result) => {
                    // Clear email from storage.
                    window.localStorage.removeItem('emailForSignIn');

                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }
    // commented below for signing in via email and password
    // const signIn = e => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth,
    //         emailRef.current.value,
    //         passwordRef.current.value).then(user => {
    //         console.log(user)
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    return (
        <div className="signin">
            <form action="">
                <h1>Sign in</h1>
                <input ref={emailRef} type="email" placeholder="email"/>
                <input ref={passwordRef} type="password" placeholder="password"/>
                <button onClick={signIn}> Sign in</button>
                <br/>
                <h5> not registered yet? </h5>
                <button onClick={signUp}> Sign up </button>
            </form>
        </div>
    )
};

export default SignIn;
