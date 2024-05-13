import React, { useState, useEffect } from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FlareIcon from "@material-ui/icons/Flare";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    width: "100%",
    minHeight: "200px",
    marginTop: "auto",
  },
  gridContainer: {
    minHeight: "inherit",
    display: "flex",
    padding: "20px 80px",
    display: "flex",
    justifyContent: "space-between",
  },
  footerBlock: {
    height: "100%",
    textAlign: "left",
    color: "white",
    marginBottom: "8px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "4px",
      marginBottom: "4px",
    },
  },
  footerTitle: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "white",
  },
  listHolder: {
    fontSize: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      marginLeft: "8px",
    },
  },
  centerItems: {
    display: "flex",
    alignItems: "center",
    marginTop: "4px",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "flex-end",
  },
  footerLink: {
    color: "white !important",
  },
}));
const Footer = () => {
  const classes = useStyles();

  const [blinkerState, setBlinkerState] = useState(true);
  const [effectInterval, setEffectInterval] = useState(true);

  useEffect(() => {
    setInterval(function () {
      setBlinkerState(false);
      setTimeout(function () {
        setBlinkerState(true);
      }, 150);
    }, 1000);
  }, []);
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/application", label: "Apply" },
    { path: "/about", label: "About" },
    { path: "/login", label: "Login" },
    { path: "/games", label: "Games" },
  ];
  return (
    <div className={`color-primary ${classes.footerContainer}`}>
      <div container className={classes.gridContainer}>
        <div item className={classes.footerBlock}>
          <h3 className={classes.footerTitle}>Adventurer's College</h3>
          <div className={classes.listHolder}>
            <div className="email-holder">
              <div>admin</div>
              <div>@adventure.education</div>
            </div>
            {/* make copywrite symbole
             */}
            <div>&copy; 2023 Adventure Education. All Rights Reserved.</div>
          </div>
        </div>
        <div className={classes.flexColumn}>
          <h3>Navigation</h3>
          {navItems.map((item) => (
            <Link key={item.path} className={classes.footerLink} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
