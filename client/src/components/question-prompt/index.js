import React, { useState } from "react";
import "./styles.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  promptContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5vh",
    backgroundColor: "rgba(255, 255, 255, .8)",
    paddingBottom: "5vh",
    paddingTop: "5vh",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: "35px",
    marginBottom: "12px",
    fontFamily: "'Audiowide', cursive !important",
  },
  promptFooter: {
    display: "flex",
    justifyContent: "center",
    fontSize: "35px",
    marginTop: "5vh",

    color: "white",
    fontSize: "28px",
    boxShadow: "4px 4px 10px darkslategrey",
    padding: "8px 0px",
  },
  individualPrompt: {
    minHeight: "30vh",
    backgroundColor: "grey",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "35px",
    padding: "20px",
    color: "white",
  },
}));
const QuestionPrompt = ({ props }) => {
  const classes = useStyles();

  const [mouseDown, setMouseDown] = useState(false);

  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };
  const handleApplicationClick = () => {
    props.history.push("/application");
    window.scrollTo(0, 0);
  };
  const gridItems = [
    {
      label: "Request a free consultation",
      path: "/consultation",
    },
    {
      label: "FAQ page",
      path: "/faq",
    },
    {
      label: "About Page",
      path: "/about",
    },
  ];
  return (
    <Grid container className={classes.promptContainer}>
      <Grid item xs={11} sm={10} md={10} className={classes.title}>
        Want to know more?
      </Grid>
      <Grid item xs={11} sm={10} md={10}>
        <Grid container style={{ boxShadow: "10px 10px 10px lightslategrey" }}>
          {gridItems.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={4}
              className={`${
                classes.individualPrompt
              } color-primary individual-prompt prompt-border no-select ${
                mouseDown ? "mouse-down" : ""
              }`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseOut={handleMouseUp}
              onClick={() => {
                if (item.path) {
                  window.scrollTo(0, 0);
                  props.history.push(item.path);
                }
              }}
            >
              {item.label}
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        xs={11}
        sm={10}
        md={10}
        className={`${
          classes.promptFooter
        } color-primary application-button no-select ${
          mouseDown ? "mouse-down" : null
        }`}
        onMouseDown={() => handleMouseDown()}
        onMouseUp={() => handleMouseUp()}
        onMouseOut={() => handleMouseUp()}
        onClick={() => handleApplicationClick()}
      >
        Click HERE to start a no-commitment application!
      </Grid>
    </Grid>
  );
};

export default QuestionPrompt;
