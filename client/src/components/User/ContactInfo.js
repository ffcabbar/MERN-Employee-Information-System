import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, IconButton } from "@material-ui/core";
import { Phone, Email } from "@material-ui/icons";
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

const ContactInfo = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root} elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              CONTACT INFORMATION
            </Typography>
          </Grid>
          <Grid item xs={12}>
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
                +905348215356
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
                ffcabbar@gmail.com
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <SendMail />
    </>
  );
};

export default ContactInfo;
