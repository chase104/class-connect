import React, { useState, useEffect } from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tabsContainer: {},
  tab: {
    fontSize: "24px",
    color: "white",
    padding: "16px 4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

  let items = ["YOU", "STUDENT", "PLAN", "REVIEW & SUBMIT"];

  return (
    <Grid container className={classes.tabsContainer}>
      {items.map((item, index) => {
        return (
          <Grid
            item
            xs={3}
            sm={3}
            className={`${classes.tab} color-primary tab no-select ${
              location == index ? "highlight" : null
            }`}
            id={index}
            onClick={(e) => handleTabClick(e)}
          >
            {item}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TabBar;
