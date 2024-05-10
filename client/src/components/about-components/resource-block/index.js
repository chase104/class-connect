import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import "./styles.css";

const Resource = ({ title, image, classes, style, type, openModal, id }) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [titleStyles, setTitleStyles] = useState(null);
  useEffect(() => {
    if (type == "resource") {
      setTitleStyles({
        fontWeight: "bold",
        color: "black",
      });
    } else {
      setTitleStyles({
        fontWeight: "bold",
        color: "black",
      });
    }
  }, []);

  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };
  const handleOpen = () => {};

  return (
    <Grid
      item
      xs={4}
      sm={type == "resource" ? 2 : 2}
      id={id}
      className={`${
        classes.resourceContainer
      } color-primary resource-block no-select ${
        mouseDown ? (type == "resource" ? "lighter-box" : "grey-box") : null
      }`}
      onClick={(e) => openModal(e)}
      onMouseDown={() => handleMouseDown()}
      onMouseUp={() => handleMouseUp()}
      onMouseOut={() => handleMouseUp()}
    >
      <div style={titleStyles} className="resource-title" id={id}>
        {title}
      </div>
      <img src={image} id={id} className={classes.resourceImg} style={style} />
    </Grid>
  );
};

export default Resource;
