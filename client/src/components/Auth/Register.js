import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
// import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import { LockOutlined } from "@material-ui/icons";
import {
  Snackbar,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <a
        href="https://github.com/ffcabbar/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "rgba(0, 0, 0, 0.54)", textDecoration: "none" }}
      >
        Built with{" "}
        <span role="img" aria-label="kalp">
          💗
        </span>{" "}
        by Furkan in
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [alertOpen, setAlertOpen] = useState(false);

  // const { setUserData } = useContext(UserContext);

  const submit = async (e) => {
    e.preventDefault();

    const newUser = { email, password, passwordCheck, displayName };
    await Axios.post("http://localhost:5000/users/register", newUser);

    // const loginRes = await Axios.post("http://localhost:5000/users/login", {
    //   email,
    //   password,
    // });

    // setUserData({
    //   token: loginRes.data.token,
    //   user: loginRes.data.user,
    // });

    // localStorage.setItem("auth-token", loginRes.data.token);
    setAlertOpen(true);
    setTimeout(() => {
      history.push("/login");
    }, 4000);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={alertOpen}
        autoHideDuration={4000}
        onClose={() => setAlertOpen(false)}
      >
        <Alert severity="success">
          <AlertTitle>Yönlendiriliyorsunuz...</AlertTitle>
          Register işlemi başarılı
        </Alert>
      </Snackbar>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>

        <form onSubmit={submit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="username"
                variant="outlined"
                fullWidth
                id="userName"
                label="User Name"
                autoFocus
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="repassword"
                label="Re-Password"
                type="password"
                id="repassword"
                autoComplete="current-password"
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                to="/login"
                style={{ color: "#3f51b5", textDecoration: "none" }}
              >
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Register;
