import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import useForm from "./useForm";
import { SIGNIN_MUTATION } from './../../mutations/sign-in.js';
import useField from "./useFields";
import {useStyles} from "./styles"
import Grid from '@material-ui/core/Grid';
import {DialogTitle} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

function SignInSide() {
    const classes = useStyles();

    const loginForm = useForm({
        onSubmit: (formData, formValid) => {
            console.log(formData);
            if (!formValid) {
                return;
            }
            signIn({
                variables: { email: formData.email, password: formData.password }
            }).then(
                () => history.push('/account'),
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
        <div className={classes.root}>
        <Grid container className={classes.signInContainer}>
            <Grid item xs={7} className={classes.aboutUs}>
                <DialogTitle className={classes.formTitle}>About us</DialogTitle>
                <DialogContent className={classes.aboutUsInfo}>
                    Create watch boards with films, series and cartoons. Combine it as you want.
                    You can make cooperation with friends and family! Enjoy every minute of planning your next weekend
                    watch list. Share your boards with other and earn money for subscribe on streaming platforms!
                </DialogContent>
            </Grid>
            <Grid item xs={5} className={classes.signInFormContainer}>
                <DialogTitle className={classes.formTitle}>Sign In</DialogTitle>
                <form id='form' onSubmit={loginForm.handleSubmit} className={classes.signInForm}>
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
                        <Button type="submit" variant="outlined" className={classes.btnSubmit}>
                            Login
                        </Button>
                    </div>
                </form>
            </Grid>
        </Grid>
        </div>
    );
}

export default SignInSide;