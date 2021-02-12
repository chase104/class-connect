import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import arrows from "../../../assets/images/arrows.png";
import "./styles.css";
import { IconButton, Typography } from "@material-ui/core";
import { ExpandLess, ChevronRight, ExpandMore } from "@material-ui/icons/";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  rowOneContainer: {
    maxHeight: "24vh",
  },
  rowOneImage: {
    minWidth: "100%",
    maxWidth: "inherit",
    maxHeight: "24vh",
    minHeight: "24vh",
    boxShadow: "14px 10px 10px #4d4d4d",
  },
  rowOneTextHolder: {
    backgroundColor: "white",
    color: "black",
    maxHeight: "24vh",
    minHeight: "24vh",
    overflow: "hidden",
    boxShadow: "10px 10px 10px #4d4d4d",
    borderRadius: "0px 10px 10px 0px",
  },
  rowOneText: {
    padding: "0px 14px 14px",
    textAlign: "justify",
    fontSize: "20px",
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
  titleHolderDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "fit-content",
    background: "white",
    padding: "8px 48px",
    borderRadius: "10px 10px 0px 0px",
    boxShadow: "4px -4px 10px darkslategrey",
    alignItems: "center",
  },
}));

const TextRow = ({ image, rowId, title, subtitle, type }) => {
  const classes = useStyles();

  const [dropdownActive, setDropdownActive] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  const handleBarClick = (e) => {
    const rowText = document.getElementById(rowId);
    if (rowText.style.maxHeight == "fit-content") {
      rowText.style.maxHeight = "24vh";
      rowText.style.borderRadius = "0px 10px 10px 0px";
      rowText.style.zIndex = "0";
    } else {
      rowText.style.maxHeight = "fit-content";
      rowText.style.position = "relative";
      rowText.style.zIndex = "1";
    }
    setDropdownActive(!dropdownActive);
  };

  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const learningLabContent =
    "The Adventurer's College is a modern online school that can offer interactive language classes with native-speaking teachers to you child. Our focus on learning through gamification, which is on the cutting edge of language education, ensures learning that's meaningful, permanent, and fun. Classes are held completely online through our lightning-fast platform. Our platform gives students a completely different online-class experience. Students don't simply watch a screen, but have the ability to inteact with class content. Teachers host games that focus on teaching concepts, vocabulary, and grammar. We believe in teaching in a much more interactive way.";
  const aboutContent =
    "The Adventurer's College is all about making education modern. The world has changed so much in the past decades yet our traditional educational systems are lagging behind. We are here to change that. Using the newest technologies and methodologies, not only do we ensure growth and experience, but we motivate interest. Traditional education mandates learning, her at The Adventurer's College, we cultivate and create an enviornment for the desire to learn. Our classes are structured to be incredibly interactive and participatory. Students are constantnly using information they've learned, rather than selecting multiple choice answers. We do test to examine students' retention of concrete information, but it's an addition to our system, not the main engine like our traditional counterparts. Here we put our students through educational trials that are akin to adventures. After absorbing all types of informating through our interactive teaching process, the students are give the opportunity to demonstrate their abilities by completing a trial.";
  const methodologyContent =
    "Here at The Adventurer's College, we know that methodology is key when it comes to education. It's all about how you plan to help the student learn and grow. We believe that learning is more about experience and participation. Our methodology revolves around the modern conceptualization of learning through gaming. We make this possible with our interactive learning environment, not like the stagnant classroom of today's school system. Students learn skills, experences, and yes, hard information. We guide them though interactive stories, games, projects, and collective lessons. Students are examined not through tests, but through what we call 'trials'. They're a kind of rite of passage through which the student demonstrates their grasp of knowledge and skills on a combination of topics. Think of it like defeating the final boss of a videogame level. Unlike with the hard integration of knowledge of traditional education, students feel a much stronger sense of connection with the material after these trials because they've used it not to get the exact right answer on an exam, but to accomplish a hard-won goal.";

  return (
    <div style={{ margin: "30px 5% 30px 5%" }}>
      <div className={classes.titleHolderDiv}>
        <div className={classes.rowTitle}>{title}</div>
        <div className={classes.rowSubtitle}>{subtitle}</div>
      </div>
      <Grid container className={classes.rowOneContainer}>
        <Grid container style={{ maxHeight: "24vh" }}>
          <Grid item sm={2} xs={3} style={{ display: "flex" }}>
            <img
              src={image}
              className={classes.rowOneImage}
              style={{
                backgroundColor: "white",
                borderRadius: "0px 0px 0px 10px",
              }}
            />
          </Grid>
          <Grid item xs={9} s={9} md={9}>
            <Grid container>
              <Grid item xs={12} s={12} m={12}>
                <div
                  className={`${classes.rowOneTextHolder} text-area no-select`}
                  id={rowId}
                  onClick={(e) => handleBarClick(e)}
                  onMouseDown={() => handleMouseDown()}
                  onMouseUp={() => handleMouseUp()}
                  onMouseOut={() => handleMouseUp()}
                >
                  <div
                    className={`${classes.rowOneText} ${
                      mouseDown ? "lighter" : null
                    }`}
                  >
                    {type == "about"
                      ? aboutContent
                      : type == "methodology"
                      ? methodologyContent
                      : learningLabContent}
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TextRow;
