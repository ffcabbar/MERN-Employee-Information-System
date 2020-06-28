import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { TextField, Button, Paper, Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
}));

const SendMail = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [alertOpen, setAlertOpen] = useState(false);
  const [control, setControl] = useState(false);

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const submit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name,
      email,
      message,
    };

    Axios.post("http://localhost:5000/api/form", dataToSubmit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setControl(true);
    setAlertOpen(true);
  };

  return (
    <>
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
          <AlertTitle>Email gönderme işlemi başarılı...</AlertTitle>
          Mail kutunuzu kontrol ediniz
        </Alert>
      </Snackbar>
      {control === true ? (
        <h3>Email Gönderildi</h3>
      ) : (
        <Paper className={classes.root} elevation={3}>
          <form onSubmit={submit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="E-Mail"
              type="email"
              id="email"
              autoComplete="email"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="message"
              label="Message"
              type="text"
              id="message"
              autoComplete="message"
              multiline
              rows={4}
              onChange={handleChange}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Send
            </Button>
          </form>
        </Paper>
      )}
    </>
  );
};

export default SendMail;
