import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./styles.css";

const useStyles = makeStyles((theme) => ({
  gameBlock: {
    height: "15vh",
    display: "flex",
  },
  gameImage: {
    height: "11vh",
    width: "auto",
  },
}));

const IndividualGame = ({ image, gameId, openModal }) => {
  const classes = useStyles();
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {}, []);

  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };

  return (
    <Grid
      item
      xs={3}
      sm={3}
      id={gameId}
      className={` no-select ${classes.gameBlock} ${
        gameId % 2 == 0 ? "yes" : "no"
      } ${mouseDown ? "down-color" : null}`}
      onMouseDown={() => handleMouseDown()}
      onMouseUp={() => handleMouseUp()}
      onMouseOut={() => handleMouseUp()}
      onClick={(e) => openModal(e)}
    >
      <div className="game-image-container" id={gameId}>
        <img
          src={image}
          className={`${classes.gameImage} game-image`}
          id={gameId}
        />
      </div>
    </Grid>
  );
};

export default IndividualGame;
