import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Typography,
  IconButton,
  LinearProgress,
} from "@material-ui/core";
import {
  LocationOn,
  Language,
  Home,
  Apartment,
  MarkunreadMailbox,
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

const AddressInfo = ({ perNo, tcNo }) => {
  const classes = useStyles();

  const [getAddressInfo, setGetAddressInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getServices = () => {
      setLoading(true);

      var config = {
        method: "get",
        url: `https://cors-anywhere.herokuapp.com/http://188.3.123.17:8000/sap/bc/zga_rest?sap-client=100&PERNR=${perNo}&MERNI=${tcNo}&INFTY=0006`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
        },
      };

      Axios(config)
        .then(function (response) {
          console.log(response.data, "hoppa");
          setGetAddressInfo([...response.data]);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
        });
    };

    getServices();
  }, [perNo, tcNo]);

  return (
    <>
      {loading ? (
        <LinearProgress color="secondary" style={{ marginBottom: "15px" }} />
      ) : (
        <Paper className={classes.root} elevation={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ textAlign: "center" }}>
                ADDRESS INFORMATION
              </Typography>
            </Grid>
            {getAddressInfo.map((item) => {
              return (
                <Grid item xs={12} key={Math.random()}>
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
                      {item.stras}
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
                      {item.locat}
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
                      {item.pstlz}
                    </Typography>
                  </div>
                  <div>
                    <IconButton style={{ marginBottom: "5px" }}>
                      <LocationOn
                        style={{ fontSize: "35px" }}
                        color="primary"
                      />
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
                      {item.ort01}
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
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      )}

      <SendMail />
    </>
  );
};

export default AddressInfo;
