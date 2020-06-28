import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";
import { LockOutlined } from "@material-ui/icons";
import {
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
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setUserData } = useContext(UserContext);

  const submit = async (e) => {
    e.preventDefault();

    const loginUser = { email, password };
    await Axios.post("http://localhost:5000/users/login", loginUser);

    const loginRes = await Axios.post(
      "http://localhost:5000/users/login",
      loginUser
    );

    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });

    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <form onSubmit={submit} className={classes.form} noValidate>
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link
                to="/register"
                style={{ color: "#3f51b5", textDecoration: "none" }}
              >
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;
