import React, { useState, useEffect } from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tabsContainer: {},
  tab: {
    fontSize: "24px",
    padding: "16px 4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bfbfbf",
    borderRadius: "30px 30px 0px 0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
}));

const TabBar = ({ appLocation, changeAppLocation }) => {
  const classes = useStyles();

  useEffect(() => {
    setLocation(appLocation[0]);
  }, [appLocation]);

  const [location, setLocation] = useState(null);

  const handleTabClick = (e) => {
    changeAppLocation(e.target.id, true);
  };

  return (
    <Grid container className={classes.tabsContainer}>
      <Grid
        item
        xs={3}
        sm={3}
        className={`${classes.tab} tab no-select ${
          location == 0 ? "highlight" : null
        }`}
        id={0}
        onClick={(e) => handleTabClick(e)}
      >
        YOU
      </Grid>
      <Grid
        item
        xs={3}
        sm={3}
        className={`${classes.tab} tab no-select ${
          location == 1 ? "highlight" : null
        }`}
        id={1}
        onClick={(e) => handleTabClick(e)}
      >
        STUDENT
      </Grid>
      <Grid
        item
        xs={3}
        sm={3}
        className={`${classes.tab} tab no-select ${
          location == 2 ? "highlight" : null
        }`}
        id={2}
        onClick={(e) => handleTabClick(e)}
      >
        PLAN
      </Grid>
      <Grid
        item
        xs={3}
        sm={3}
        className={`${classes.tab} tab no-select ${
          location == 3 ? "highlight" : null
        }`}
        id={3}
        onClick={(e) => handleTabClick(e)}
      >
        REVIEW & SUBMIT
      </Grid>
    </Grid>
  );
};

export default TabBar;
