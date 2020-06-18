import React, { useState, useEffect } from 'react';
import useForm from "../hooks/useForm"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store"
import { signIn } from "../store/user/actions"
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

const SignIn: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, error_text, error } = useSelector((state: RootState) => state.system);
  const { isAuthenticated, } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(clearError())
  }, [])

  const [errors, setErrors] = useState("")

  const [formFields, createChangeHandler] = useForm({
    email: "",
    password: "",
  });

  if (isAuthenticated) {
    // return <Redirect push to="/" />;
    history.push("/")
  }


  const checkEmail = () => {
    if (formFields.email.length) {
      setErrors("")
      const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3, 9}[\.][a-z]{2, 5}/g;
      const result = pattern.test(formFields.email);
      if (result) {
        setErrors("Email is not valid!")
      }
    }
  }


  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault()
    const { email, password } = formFields;
    if (!errors) {
      dispatch(signIn(email, password))
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
          Sign In
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
            onBlur={checkEmail}
            value={formFields.email}
            error={!!errors}
          />
          <FormHelperText error={!!errors}>{errors}</FormHelperText>
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
          />
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
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/signup">
                "Creacte New Account? Sign Up"
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignIn;
