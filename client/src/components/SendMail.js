import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { TextField, Button, Paper } from "@material-ui/core";

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

  const handleChange = (e) => {
    // console.log(e.target.id, "hayda");

    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name,
      email,
      message,
    };

    await Axios.post("http://localhost:5000/api/form", dataToSubmit);
  };

  return (
    <>
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
    </>
  );
};

export default SendMail;
