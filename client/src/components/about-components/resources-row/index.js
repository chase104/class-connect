import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import treasureMap from "../../../assets/images/treasure-map.png";
import "./styles.css";
import { IconButton, Typography } from "@material-ui/core";
import { ExpandLess, ChevronRight, ExpandMore } from "@material-ui/icons/";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import fillerImg from "../../../assets/images/fillerImage.png";
import { CheckCircle } from "@material-ui/icons/";
import computers from "../../../assets/images/computers.jpg";
import documents from "../../../assets/images/documents.png";
import game from "../../../assets/images/game.png";
import headphones from "../../../assets/images/headphones.png";
import question from "../../../assets/images/question.png";
import Resource from "../resource-block/index.js";

const useStyles = makeStyles((theme) => ({
  rowOneContainer: {
    maxHeight: "32vh",
    minHeight: "32vh",
  },
  rowOneTextHolder: {
    backgroundColor: "var(--color-primary)",
    color: "white",
    maxHeight: "32vh",
    overflow: "hidden",
    boxShadow: "4px 4px 10px #4d4d4d",
  },
  rowOneText: {
    padding: "0px 14px",
  },
  rowOneTitleDiv: {
    marginRight: "auto",
    marginTop: "8px",
    display: "flex",
    width: "100%",
  },

  upButton: {
    marginLeft: "auto",
    marginRight: "4%",
  },
  paper: {
    height: "inherit",
    backgroundColor: "blue",
  },
  iconButton: {
    marginLeft: "auto",
    marginRight: "20px",
    boxShadow: "0px 0px 36px black",
    marginTop: "4px",
    color: "white",
  },
  rowTitleHolder: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    color: "black",
    backgroundColor: "white",
    borderRadius: "10px 0 0 10px",
    padding: "0px 4px",
    boxShadow: "-10px 12px 14px darkslategrey",
    display: "flex",
    flexDirection: "column",
  },
  rowTitle: {
    fontFamily: "'Audiowide', cursive !important",
    fontSize: "24px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  rowSubtitle: {
    fontFamily: "'Oswald' !important",
    fontSize: "18px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  resourceImg: {
    maxWidth: "100%",
    marginTop: "auto",
    marginBottom: "auto",
  },
  resourceContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1565c0",
    padding: "4px 4px",
  },
  titleHolderDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "fit-content",
    background: "white",
    padding: "8px 24px",
    borderRadius: "10px 10px 0px 0px",
    boxShadow: "4px -4px 10px darkslategrey",
    alignItems: "center",
  },
}));

const ResourcesRow = () => {
  const classes = useStyles();

  const [dropdownActive, setDropdownActive] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  const handleBarClick = (e) => {
    const rowText = document.getElementById("row-one");
    if (rowText.classList.contains("expand")) {
      rowText.classList.remove("expand");
    } else {
      rowText.classList.add("expand");
    }
    setDropdownActive(!dropdownActive);
  };

  useEffect(() => {}, []);
  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };
  return (
    <div style={{ margin: "30px 5% 30px 5%" }}>
      <div className={classes.titleHolderDiv}>
        <div className={classes.rowTitle}>Your Resources</div>
        <div className={classes.rowSubtitle}>We've got your back</div>
      </div>
      <Grid container className={classes.rowOneContainer}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{ display: "flex", alignItems: "center", maxHeight: "32vh" }}
        >
          <Grid container style={{ maxHeight: "32vh", minHeight: "32vh" }}>
            <Resource
              title="Interactive Classes"
              style={{ borderRadius: "20px" }}
              classes={classes}
              image={computers}
            />
            <Resource
              title="Lesson Material Access"
              style={{ width: "80%" }}
              classes={classes}
              image={documents}
            />
            <Resource
              title="Interactive Games"
              style={{ width: "80%", borderRadius: "20px" }}
              classes={classes}
              image={game}
            />
            <Resource
              title="Education Assistance Team"
              style={{ width: "80%" }}
              classes={classes}
              image={headphones}
            />
            <Resource
              title="FAQ Page"
              style={{
                width: "70%",
                backgroundColor: "white",
                padding: "8px",
                borderRadius: "20px",
              }}
              classes={classes}
              image={question}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResourcesRow;
