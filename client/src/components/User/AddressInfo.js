import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, IconButton } from "@material-ui/core";
import {
  LocationOn,
  Language,
  Home,
  Apartment,
  MarkunreadMailbox,
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

const AddressInfo = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root} elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              ADDRESS INFORMATION
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div>
              <IconButton style={{ marginBottom: "5px" }}>
                <Home style={{ fontSize: "35px" }} color="primary" />
              </IconButton>

              <Typography variant="h6" component="span" display="inline">
                Address:
              </Typography>

              <Typography
                variant="h6"
                component="span"
                display="inline"
                color="textSecondary"
                className={classes.left}
              >
                Hekimoglu Ali Pasa Cad. Seyyid omer mah. No/118
              </Typography>
            </div>
            <div>
              <IconButton style={{ marginBottom: "5px" }}>
                <Apartment style={{ fontSize: "35px" }} color="primary" />
              </IconButton>

              <Typography variant="h6" component="span" display="inline">
                Apartment:
              </Typography>

              <Typography
                variant="h6"
                component="span"
                display="inline"
                color="textSecondary"
                className={classes.left}
              >
                8
              </Typography>
            </div>
            <div>
              <IconButton style={{ marginBottom: "5px" }}>
                <MarkunreadMailbox
                  style={{ fontSize: "35px" }}
                  color="primary"
                />
              </IconButton>

              <Typography variant="h6" component="span" display="inline">
                Zip Code:
              </Typography>

              <Typography
                variant="h6"
                component="span"
                display="inline"
                color="textSecondary"
                className={classes.left}
              >
                34058
              </Typography>
            </div>
            <div>
              <IconButton style={{ marginBottom: "5px" }}>
                <LocationOn style={{ fontSize: "35px" }} color="primary" />
              </IconButton>

              <Typography variant="h6" component="span" display="inline">
                City:
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
                Country:
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

export default AddressInfo;
