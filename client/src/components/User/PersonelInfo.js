import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, IconButton } from "@material-ui/core";
import {
  AccountCircle,
  Wc,
  CalendarToday,
  LocationOn,
  Language,
} from "@material-ui/icons";
import SendMail from "../SendMail";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    marginBottom: "25px",
  },
  left: {
    marginLeft: "20px",
  },
}));

const PersonelInfo = () => {
  const classes = useStyles();

  const [getPersonelInfo, setGetPersonelInfo] = useState([]);

  const getServices = () => {
    var config = {
      method: "get",
      url:
        "https://cors-anywhere.herokuapp.com/http://188.3.123.17:8000/sap/bc/zga_rest?sap-client=100&PERNR=1004&MERNI=72197527896&INFTY=0002",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
      },
    };

    Axios(config)
      .then(function (response) {
        console.log(response.data, "hoppa");
        setGetPersonelInfo([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <Paper className={classes.root} elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              PERSONEL INFORMATION
            </Typography>
          </Grid>
          {getPersonelInfo.map((item) => {
            return (
              <Grid item xs={12} key={Math.random()}>
                <div>
                  <IconButton style={{ marginBottom: "5px" }}>
                    <AccountCircle
                      style={{ fontSize: "35px" }}
                      color="primary"
                    />
                  </IconButton>

                  <Typography variant="h6" component="span" display="inline">
                    Adı Soyadı:
                  </Typography>

                  <Typography
                    variant="h6"
                    component="span"
                    display="inline"
                    color="textSecondary"
                    className={classes.left}
                  >
                    {item.ename}
                  </Typography>
                </div>
                <div>
                  <IconButton style={{ marginBottom: "5px" }}>
                    <Wc style={{ fontSize: "35px" }} color="primary" />
                  </IconButton>

                  <Typography variant="h6" component="span" display="inline">
                    Cinsiyet:
                  </Typography>

                  <Typography
                    variant="h6"
                    component="span"
                    display="inline"
                    color="textSecondary"
                    className={classes.left}
                  >
                    {item.anrex}
                  </Typography>
                </div>
                <div>
                  <IconButton style={{ marginBottom: "5px" }}>
                    <CalendarToday
                      style={{ fontSize: "35px" }}
                      color="primary"
                    />
                  </IconButton>

                  <Typography variant="h6" component="span" display="inline">
                    Doğum Tarihi:
                  </Typography>

                  <Typography
                    variant="h6"
                    component="span"
                    display="inline"
                    color="textSecondary"
                    className={classes.left}
                  >
                    {item.gbdat}
                  </Typography>
                </div>
                <div>
                  <IconButton style={{ marginBottom: "5px" }}>
                    <LocationOn style={{ fontSize: "35px" }} color="primary" />
                  </IconButton>

                  <Typography variant="h6" component="span" display="inline">
                    Doğum Yeri:
                  </Typography>

                  <Typography
                    variant="h6"
                    component="span"
                    display="inline"
                    color="textSecondary"
                    className={classes.left}
                  >
                    {item.gbort}
                  </Typography>
                </div>
                <div>
                  <IconButton style={{ marginBottom: "5px" }}>
                    <Language style={{ fontSize: "35px" }} color="primary" />
                  </IconButton>

                  <Typography variant="h6" component="span" display="inline">
                    Doğum Ülke:
                  </Typography>

                  <Typography
                    variant="h6"
                    component="span"
                    display="inline"
                    color="textSecondary"
                    className={classes.left}
                  >
                    {item.landx}
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
      <SendMail />
    </>
  );
};

export default PersonelInfo;
