import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, IconButton } from "@material-ui/core";
import {
  Language,
  DoneAll,
  School,
  ViewHeadline,
  Score,
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

const EducationInfo = () => {
  const classes = useStyles();
  const [getEducationInfo, setGetEducationInfo] = useState([]);

  const getServices = () => {
    var config = {
      method: "get",
      url:
        "https://cors-anywhere.herokuapp.com/http://188.3.123.17:8000/sap/bc/zga_rest?sap-client=100&PERNR=1004&MERNI=72197527896&INFTY=0022",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
      },
    };

    Axios(config)
      .then(function (response) {
        console.log(response.data, "hoppa");
        setGetEducationInfo([...response.data]);
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
              EDUCATION INFORMATION
            </Typography>
          </Grid>
          {getEducationInfo.map((item) => {
            return (
              <Grid item xs={12} key={Math.random()}>
                <div>
                  <IconButton style={{ marginBottom: "5px" }}>
                    <School style={{ fontSize: "35px" }} color="primary" />
                  </IconButton>

                  <Typography variant="h6" component="span" display="inline">
                    University:
                  </Typography>

                  <Typography
                    variant="h6"
                    component="span"
                    display="inline"
                    color="textSecondary"
                    className={classes.left}
                  >
                    {item.insti}
                  </Typography>
                </div>
                <div>
                  <IconButton style={{ marginBottom: "5px" }}>
                    <Language style={{ fontSize: "35px" }} color="primary" />
                  </IconButton>

                  <Typography variant="h6" component="span" display="inline">
                    Country:
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
                <div>
                  <IconButton style={{ marginBottom: "5px" }}>
                    <DoneAll style={{ fontSize: "35px" }} color="primary" />
                  </IconButton>

                  <Typography variant="h6" component="span" display="inline">
                    Status:
                  </Typography>

                  <Typography
                    variant="h6"
                    component="span"
                    display="inline"
                    color="textSecondary"
                    className={classes.left}
                  >
                    {item.satxt}
                  </Typography>
                </div>
                <div>
                  <IconButton style={{ marginBottom: "5px" }}>
                    <ViewHeadline
                      style={{ fontSize: "35px" }}
                      color="primary"
                    />
                  </IconButton>

                  <Typography variant="h6" component="span" display="inline">
                    Department:
                  </Typography>

                  <Typography
                    variant="h6"
                    component="span"
                    display="inline"
                    color="textSecondary"
                    className={classes.left}
                  >
                    {item.frtxt}
                  </Typography>
                </div>
                <div>
                  <IconButton style={{ marginBottom: "5px" }}>
                    <Score style={{ fontSize: "35px" }} color="primary" />
                  </IconButton>

                  <Typography variant="h6" component="span" display="inline">
                    Gpa:
                  </Typography>

                  <Typography
                    variant="h6"
                    component="span"
                    display="inline"
                    color="textSecondary"
                    className={classes.left}
                  >
                    {item.emark}
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

export default EducationInfo;
