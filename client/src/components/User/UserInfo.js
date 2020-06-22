import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { red } from "@material-ui/core/colors";
import {
  Card,
  CardHeader,
  CardActions,
  Collapse,
  CardContent,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import {
  Work,
  ExpandMore,
  VerifiedUser,
  Fingerprint,
} from "@material-ui/icons";
import SendMail from "../SendMail";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    maxHeight: 345,
    marginBottom: "25px",
  },
  root2: {
    padding: "20px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const UserInfo = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <IconButton>
                <Fingerprint />
              </IconButton>
            </Avatar>
          }
          action={
            <Typography aria-label="settings" style={{ marginTop: "5px" }}>
              ID: 0001004
            </Typography>
          }
          title="Furkan Cabbar"
          subheader="02.09.1997"
        />
        <Box>
          <IconButton>
            <VerifiedUser fontSize="small" color="primary" />
          </IconButton>
          <span>İnsan Kaynakları Direktörü</span>
        </Box>
        <Box>
          <IconButton>
            <Work fontSize="small" color="primary" />
          </IconButton>
          <span>DEMO Şirketi</span>
        </Box>
        <CardActions disableSpacing>
          <Box style={{ marginRight: "5px" }}>
            <Typography>Istanbul,</Typography>
          </Box>
          <Box>
            <Typography>Turkey</Typography>
          </Box>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <SendMail />
    </>
  );
};

export default UserInfo;
