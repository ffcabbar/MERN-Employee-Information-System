import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import {
  LockOpen,
  Visibility,
  Drafts,
  FormatListNumbered,
} from "@material-ui/icons";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Home = () => {
  const classes = useStyles();
  const { userData } = useContext(UserContext);

  console.log(userData.user, "wowwwwww");

  return (
    <>
      {userData.user ? null : (
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <LockOpen />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Login?
                </Typography>
                <Typography>You can sign up and sign in easily</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <Visibility />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  View information!
                </Typography>
                <Typography>What are you waiting for?</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <Drafts />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Send Email
                </Typography>
                <Typography>Notify the person</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <FormatListNumbered />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Create Tasks
                </Typography>
                <Typography>Create and edit new tasks!</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      )}
    </>
  );
};

export default Home;
