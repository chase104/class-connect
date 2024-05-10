import React, { useEffect, useState } from "react";
import "./styles.css";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sloganTitle: {
    fontSize: "24px !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px !important",
    },
  },
}));

const Slogan = (props) => {
  const classes = useStyles();
  //history check

  const [display, setDislay] = useState(null);
  useEffect(() => {
    if (props.location.pathname != "/pdfpage" && display != "flex") {
      setDislay(true);
    } else {
      setDislay(false);
    }
  }, [props.location.pathname]);

  return (
    <Grid
      container
      id="slogan-container"
      justify="center"
      style={{
        borderBottom: "1px solid #80b3b1 ",
        backgroundColor: "white",
        paddingTop: "8px",
      }}
      className={display == true ? "flex-display" : "null-display"}
    >
      <Grid item xs={1} sm={2}>
        <div className="slogan-div"></div>
      </Grid>
      <Grid item xs={10} sm={8}>
        <div className="slogan-div title-slogan-div">
          <Typography
            variant="h4"
            style={{ fontWeight: "bold" }}
            className={classes.sloganTitle}
          >
            Paving the way forward
          </Typography>
          <Typography>Quality, Convenience, Consistency</Typography>
        </div>
      </Grid>
      <Grid item xs={1} sm={2}>
        <div className="slogan-div"></div>
      </Grid>
    </Grid>
  );
};

export default Slogan;
