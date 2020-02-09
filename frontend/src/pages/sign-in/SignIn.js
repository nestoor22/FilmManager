import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import useForm from "./useForm";
import { SIGNIN_MUTATION } from './../../mutations/sign-in.js';
import useField from "./useFields";
import './SignIn.css'


function SignInSide() {

    const loginForm = useForm({
        onSubmit: (formData, formValid) => {
            console.log(formData);
            if (!formValid) {
                return;
            }
            signIn({
                variables: { email: formData.email, password: formData.password }
            }).then(
                () => history.push('/'),
                () => {
                }
            );
        }
    });
    const [signIn] = useMutation(SIGNIN_MUTATION);
    const history = useHistory();

    const emailField = useField('email', loginForm, {
        defaultValue: ''
    });

    const passwordField = useField('password', loginForm, {
        defaultValue: '',
    });

    return (
        <div className='container signInContainer'>
            <div className='row'>
                <div className='col col-sm-7 aboutUs'>
                    <h4 className='formTitle'>About us</h4>
                    <h6 className='aboutUsInfo'>
                        Create watch boards with films, series and cartoons. Combine it as you want.
                        You can make cooperation with friends and family! Enjoy every minute of planning your next weekend
                        watch list. Share your boards with other and earn money for subscribe on streaming platforms!
                    </h6>
                </div>
                <div className='col col-sm-5 signInFormContainer'>
                    <h4 className='formTitle'>Sign In</h4>
                    <form id='form' onSubmit={loginForm.handleSubmit} className='signInForm'>
                        <div className="form-group">
                            <input type="text" className="form-control" form='form'
                                   value={emailField.value}
                                   onChange={emailField.onChange}
                                   placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" form='form'
                                   value={passwordField.value}
                                   onChange={passwordField.onChange}
                                   placeholder="Your Password"/>
                        </div>
                        <div className="form-group">
                            <input form='form' type="submit" value="Login" className="btn btn-outline-light btnSubmit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignInSide;