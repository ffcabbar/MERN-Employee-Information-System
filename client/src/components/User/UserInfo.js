import React, { useState, useEffect } from "react";
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
import Axios from "axios";

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

const UserInfo = ({ perNo, tcNo }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [getUserInfo, setGetUserInfo] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const getServices = () => {
      var config = {
        method: "get",
        url: `https://cors-anywhere.herokuapp.com/http://188.3.123.17:8000/sap/bc/zga_rest?sap-client=100&PERNR=${perNo}&MERNI=${tcNo}&INFTY=0001`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        },
      };

      Axios(config)
        .then(function (response) {
          console.log(response.data, "hoppa");
          setGetUserInfo([...response.data]);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    getServices();
  }, [perNo, tcNo]);

  return (
    <>
      {getUserInfo.map((item) => {
        return (
          <Card className={classes.root} key={item.pernr}>
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
                  ID: {item.pernr}
                </Typography>
              }
              title={item.ename}
              subheader={item.is_begda}
            />
            <Box>
              <IconButton>
                <VerifiedUser fontSize="small" color="primary" />
              </IconButton>
              <span>{item.plntxt}</span>
            </Box>
            <Box>
              <IconButton>
                <Work fontSize="small" color="primary" />
              </IconButton>
              <span>{item.butxt}</span>
            </Box>
            <CardActions disableSpacing>
              <Box style={{ marginRight: "5px" }}>
                <Typography>{item.name1}</Typography>
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
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      })}

      <SendMail />
    </>
  );
};

export default UserInfo;
