import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import useForm from "./useForm";
import { SIGNIN_MUTATION } from './../../mutations/sign-in.js';
import useField from "./useFields";
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
    const classes = useStyles();
    const [signIn] = useMutation(SIGNIN_MUTATION);
    const history = useHistory();

    const emailField = useField('email', loginForm, {
        defaultValue: ''
    });

    const passwordField = useField('password', loginForm, {
        defaultValue: '',
    });

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={12} md={7} className={classes.image} >
                <Grid container className={classes.about}>
                    <Typography variant="h1">
                    About us
                    </Typography>
                    <Typography variant="h3" className={classes.info}>
                    Create watch boards with films, series and cartoons. Combine it as you want.
                    You can make cooperation with friends and family! Enjoy every minute of planning your next weekend
                    watch list. Share your boards with other and earn money for subscribe on streaming platforms!
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={5} className={classes.formBox} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form id="form" onSubmit={loginForm.handleSubmit} className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={emailField.value}
                            onChange={emailField.onChange}
                            id="email"
                            label="Email Address"
                            name="email"
                            form="form"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            form={"form"}
                            name="password"
                            value={passwordField.value}
                            onChange={passwordField.onChange}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            form="form"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default SignInSide;