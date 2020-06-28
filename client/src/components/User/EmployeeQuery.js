import React, { useState } from "react";
import { Paper, TextField, Button, Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
}));

const EmployeeQuery = ({ setEmpQuery, perNo, setPerNo, tcNo, setTCNo }) => {
  const classes = useStyles();

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertOpenForError, setAlertOpenForError] = useState(false);

  const handleChange = (e) => {
    if (e.target.id === "per") {
      setPerNo(e.target.value);
    } else {
      setTCNo(e.target.value);
    }
  };

  const getServices = () => {
    var config = {
      method: "post",
      url: `https://cors-anywhere.herokuapp.com/http://188.3.123.17:8000/sap/bc/zga_rest2?sap-client=100&PERNR=${perNo}&MERNI=${tcNo}`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
      },
    };

    Axios(config)
      .then(function (response) {
        console.log(response.data, "hoppa");
        setEmpQuery(...response.data);
        // setControl(...response.data);
        if (response.data === "S") {
          setAlertOpen(true);
        }
        if (response.data === "E") {
          setAlertOpenForError(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const submit = (e) => {
    e.preventDefault();
    getServices();
  };

  return (
    <>
      {alertOpen === true ? (
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
            <AlertTitle>
              Giriş Başarılı. Çalışanın bilgileri getirildi.
            </AlertTitle>
          </Alert>
        </Snackbar>
      ) : null}

      {alertOpenForError === true ? (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={alertOpenForError}
          autoHideDuration={4000}
          onClose={() => setAlertOpenForError(false)}
        >
          <Alert severity="error">
            <AlertTitle>
              Böyle bir kullanıcı yok. Lütfen numaraları doğru girdiğinizden
              emin olunuz.
            </AlertTitle>
          </Alert>
        </Snackbar>
      ) : null}

      <Paper className={classes.root} elevation={3}>
        <form onSubmit={submit} noValidate>
          <TextField
            type="number"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="per"
            label="Personel No"
            name="per"
            autoComplete="per"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            type="number"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="tc"
            label="Tc No"
            id="tc"
            autoComplete="tc"
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="secondary">
            Submit
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default EmployeeQuery;
