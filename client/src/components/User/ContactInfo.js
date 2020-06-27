import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, IconButton } from "@material-ui/core";
import { Phone, Email } from "@material-ui/icons";
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

const ContactInfo = ({ perNo, tcNo }) => {
  const classes = useStyles();

  const [getContactInfo, setGetContactInfo] = useState([]);

  useEffect(() => {
    const getServices = () => {
      var config = {
        method: "get",
        url: `https://cors-anywhere.herokuapp.com/http://188.3.123.17:8000/sap/bc/zga_rest?sap-client=100&PERNR=${perNo}&MERNI=${tcNo}&INFTY=0105`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        },
      };

      Axios(config)
        .then(function (response) {
          console.log(response.data, "hoppa");
          setGetContactInfo([...response.data]);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    getServices();
  }, [perNo, tcNo]);

  return (
    <>
      <Paper className={classes.root} elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              CONTACT INFORMATION
            </Typography>
          </Grid>
          {getContactInfo.map((item) => {
            return (
              <Grid item xs={12} key={Math.random()}>
                <div>
                  <IconButton style={{ marginBottom: "5px" }}>
                    <Phone style={{ fontSize: "35px" }} color="primary" />
                  </IconButton>

                  <Typography variant="h6" component="span" display="inline">
                    Phone:
                  </Typography>

                  <Typography
                    variant="h6"
                    component="span"
                    display="inline"
                    color="textSecondary"
                    className={classes.left}
                  >
                    {item.telnr}
                  </Typography>
                </div>
                <div>
                  <IconButton style={{ marginBottom: "5px" }}>
                    <Email style={{ fontSize: "35px" }} color="primary" />
                  </IconButton>

                  <Typography variant="h6" component="span" display="inline">
                    Mail:
                  </Typography>

                  <Typography
                    variant="h6"
                    component="span"
                    display="inline"
                    color="textSecondary"
                    className={classes.left}
                  >
                    {item.mail}
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

export default ContactInfo;
