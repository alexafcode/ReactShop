import React, { useState } from 'react';
import useForm from "../hooks/useForm"
import { useDispatch } from 'react-redux';
import { signUp } from "../store/user/actions"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialState = {
    mail: false,
    password: false
  }
  const [errors, setErrors] = useState(initialState)

  const [formFields, createChangeHandler] = useForm({
    email: "",
    password: "",
    repeatPassword: ""
  });

  const validateFields = (): boolean => {
    const { email, password, repeatPassword } = formFields;
    setErrors(initialState)
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const checkEmail = pattern.test(email);
    if (!checkEmail) {
      setErrors({ ...errors, mail: true })
      return false
    }
    if (password.length < 6 && password !== repeatPassword) {
      setErrors({ ...errors, password: true })
      return false
    }
    return true
  }

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault()
    if (validateFields()) {
      dispatch(signUp(formFields.email, formFields.password, formFields.email))
      console.log("success")
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={createChangeHandler}
            value={formFields.email}
            error={errors.mail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={createChangeHandler}
            value={formFields.password}
            error={errors.password}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="repeatPassword"
            name="repeatPassword"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={createChangeHandler}
            value={formFields.repeatPassword}
            error={errors.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signin" variant="body2">
                {"Don't have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignIn;
