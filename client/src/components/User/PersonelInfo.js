import React from "react";
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
  return (
    <>
      <Paper className={classes.root} elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              PERSONEL INFORMATION
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div>
              <IconButton style={{ marginBottom: "5px" }}>
                <AccountCircle style={{ fontSize: "35px" }} color="primary" />
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
                Furkan Cabbar
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
                Erkek
              </Typography>
            </div>
            <div>
              <IconButton style={{ marginBottom: "5px" }}>
                <CalendarToday style={{ fontSize: "35px" }} color="primary" />
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
                02.09.1997
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
                Istanbul/Bakırkoy
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
                Turkey
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <SendMail />
    </>
  );
};

export default PersonelInfo;
