import React from "react";
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
  return (
    <>
      <Paper className={classes.root} elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              EDUCATION INFORMATION
            </Typography>
          </Grid>
          <Grid item xs={12}>
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
                Dogus University
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
                UnderGraduate
              </Typography>
            </div>
            <div>
              <IconButton style={{ marginBottom: "5px" }}>
                <ViewHeadline style={{ fontSize: "35px" }} color="primary" />
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
                Computer Science
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
                3,12
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <SendMail />
    </>
  );
};

export default EducationInfo;
