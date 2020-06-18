import React, { useState, useEffect } from 'react';
import useForm from "../hooks/useForm"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store"
import { signUp } from "../store/user/actions"
import { clearError } from "../store/system/actions"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import LinearProgress from "@material-ui/core/LinearProgress";
import { useHistory, Link } from 'react-router-dom';

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
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, error_text, error } = useSelector((state: RootState) => state.system);
  const { isAuthenticated, } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(clearError())
  }, [])

  if (isAuthenticated) {
    history.push("/")
  }

  const initialState = {
    mail: "",
    password: "",
    repeatPassword: ""
  }
  const [errors, setErrors] = useState(initialState)

  const [formFields, createChangeHandler] = useForm({
    email: "",
    password: "",
    repeatPassword: ""
  });

  const validateFields = (): boolean => {
    const { password, repeatPassword } = formFields;
    setErrors({ ...initialState });
    if (password.length < 6) {
      setErrors({ ...errors, password: "Password must be 6 characters long!" })
      return false
    }
    if (password !== repeatPassword) {
      setErrors({ ...errors, repeatPassword: "Passwords must match!" })
      return false
    }
    return true
  }

  const checkEmail = () => {
    if (formFields.email.length) {
      setErrors({ ...errors, mail: "" })
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3, 9}[\.][a-z]{2, 5}/g;
      const result = pattern.test(formFields.email);
      if (result) {
        setErrors({ ...errors, mail: "Email is not valid!" })
      }
    }
  }


  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault()
    const { email, password } = formFields;
    if (!errors.mail && validateFields()) {
      dispatch(signUp(email, password, email))
      console.log("success")
    }
  }

  const linearProgress = loading && <LinearProgress />;

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
            onBlur={checkEmail} //ToDo
            value={formFields.email}
            error={!!errors.mail}
          />
          <FormHelperText error={!!errors.mail}>{errors.mail}</FormHelperText>
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
            error={!!errors.password}
          />
          <FormHelperText error={!!errors.password}>{errors.password}</FormHelperText>
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
            error={!!errors.repeatPassword}
          />
          <FormHelperText error={!!errors.repeatPassword}>{errors.repeatPassword}</FormHelperText>
          {linearProgress}
          <FormHelperText error={error}>{error_text}</FormHelperText>
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
              <Link to="/signin">
                "Don't have an account? Sign In"
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;
