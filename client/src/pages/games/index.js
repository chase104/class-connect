import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "../../components/tab/index.js";
import { Grid, IconButton } from "@material-ui/core";
import "./styles.css";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import tractorGame from "../../assets/images/game-tractor.png";
import spaceGame from "../../assets/images/game-space.png";
import horseGame from "../../assets/images/game-horse.png";
import houseGame from "../../assets/images/game-house.png";
import dragonGame from "../../assets/images/game-dragon.png";
import coffeeGame from "../../assets/images/game-coffee.png";
import pizzGame from "../../assets/images/game-pizz.png";
import motorGame from "../../assets/images/game-motor.png";
import treeGame from "../../assets/images/game-tree.png";
import dollGame from "../../assets/images/game-doll.png";
import headphonesGame from "../../assets/images/game-headphones.png";
import wizardGame from "../../assets/images/game-wizard.png";
import worldGame from "../../assets/images/game-world.png";
import swordGame from "../../assets/images/game-sword.png";
import sandwichGame from "../../assets/images/game-sandwich.png";
import plantsGame from "../../assets/images/game-plants.png";
import santaGame from "../../assets/images/game-santa.png";
import pencilGame from "../../assets/images/game-pencil.png";
import fireGame from "../../assets/images/game-fire.png";
import rainGame from "../../assets/images/game-rain.png";
import dogGame from "../../assets/images/game-dog.png";
import deliveryGame from "../../assets/images/game-delivery.png";
import sharkGame from "../../assets/images/game-shark.png";
import knightGame from "../../assets/images/game-knight.png";
import constructionImg from "../../assets/images/construction.png";

import IndividualGame from "../../components/games-components/games-block/index.js";

const useStyles = makeStyles((theme) => ({
  gamesPage: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
  },
  gamesContainer: {
    display: "flex",
  },

  unitOne: {
    marginTop: "5vh",
  },
  unitBar: {
    borderRadius: "10px 10px 0px 0px",
    color: "white",
    marginBottom: "30px",
  },
  unitTitle: {
    backgroundColor: "#1565c0",
    textAlign: "start",
    marginLeft: "4vh",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    padding: "4px",
    borderRadius: "10px 10px 0px 0px",
    position: "relative",
    boxShadow: "4px -3px 10px grey",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  gameBlock: {
    height: "15vh",
    display: "flex",
  },

  gameImage: {
    height: "11vh",
    width: "auto",
  },
  modalHolder: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
    maxHeight: "70vh",
    backgroundColor: "var(--color-primary)",
    border: "2px solid black",
    boxShadow: "10px 10px 10px black",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20vh",
  },
  modalTitleHolder: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontWeight: "bold",
    fontSize: "24px",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  modalImage: {
    maxHeight: "12vh",
    maxWidth: "fit-content",
    marginRight: "20px",
  },
  whiteBackground: {
    backgroundColor: "white",
    padding: "4px",
  },
  modalContent: {
    color: "white",
    marginTop: "4vh",
    marginBottom: "8vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontWeight: "bold",
  },
  constructionImage: {
    maxWidth: "100px",
    height: "auto",
  },
}));

const Games = () => {
  const classes = useStyles();

  const [games, setGames] = useState([
    [
      null,
      { id: 1, image: tractorGame, title: "Fred's Farm" },
      { id: 2, image: spaceGame, title: "Space Adventure I" },
      { id: 3, image: horseGame, title: "Horse Rider" },
      { id: 4, image: houseGame, title: "Detective Dave" },
      { id: 5, image: dragonGame, title: "A Dragon's Quest" },
      { id: 6, image: coffeeGame, title: "One Coffee, Please" },
      { id: 7, image: pizzGame, title: "Pizza Maker" },
      { id: 8, image: motorGame, title: "Motorcycle Madness" },
      { id: 9, image: treeGame, title: "Tree Care" },
      { id: 10, image: dollGame, title: "Daniel's Doll" },
      { id: 11, image: headphonesGame, title: "Music Maker" },
      { id: 12, image: wizardGame, title: "A Wizard's Quest" },
    ],
    [
      null,
      { id: 13, image: worldGame, title: "Tina's Travels" },
      { id: 14, image: swordGame, title: "Heart of Samuri" },
      { id: 15, image: sandwichGame, title: "Sally's Sandwich Shop" },
      { id: 16, image: knightGame, title: "A Knight's Quest" },
    ],
    [
      null,
      { id: 17, image: plantsGame, title: "Gary's Garden" },
      { id: 18, image: santaGame, title: "Saving Santa" },
      { id: 19, image: pencilGame, title: "A Student's Life" },
      { id: 20, image: fireGame, title: "Cathy's Camp" },
      { id: 21, image: rainGame, title: "Rain Catch" },
      { id: 22, image: dogGame, title: "Douge's Dog" },
    ],
    [
      null,
      { id: 23, image: deliveryGame, title: "Package Dash" },
      { id: 24, image: sharkGame, title: "Mr. Shark's Adventure" },
    ],
  ]);

  const [splitUnits, setSplitUnits] = useState(null);

  const [unitsToMap, setUnitsToMap] = useState([0, 1, 2, 3]);
  const [mouseDown, setMouseDown] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalInformation, setModalInformation] = useState({ id: "6" });

  // scroll to tab
  useEffect(() => {
    setTimeout(() => {
      var top = document.getElementById("mytab").offsetTop; //Getting Y of target element
      window.scrollTo(0, top);
    }, 1);
  }, []);

  useEffect(() => {
    const stateArray = [[], [], [], []];
    for (var j = 0; j < unitsToMap.length; j++) {
      let tempArray = [];
      for (var i = 1; i < games[j].length; i++) {
        if (i == games[j].length - 1 || Number.isInteger(i / 4)) {
          tempArray.push(games[j][i]);
          stateArray[j].push([...tempArray]);
          tempArray = [];
        } else {
          tempArray.push(games[j][i]);
        }
      }
      setSplitUnits([...stateArray]);
    }
  }, []);

  useEffect(() => {
    setTimeout(function () {
      const constructionElement = document.getElementById("construction-img");
      if (openModal == true) {
        let left = true;
        let rotateImage = () => {
          if (left) {
            constructionElement.style.transform = "rotate(20deg)";
            left = false;
          } else {
            constructionElement.style.transform = "rotate(-20deg)";
            left = true;
          }
        };
        rotateImage();
        setInterval(function () {
          rotateImage();
        }, 1500);
      }
    }, 100);
  }, [openModal]);

  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };
  const handleOpen = (e) => {
    let clickedGame;
    for (var i = 0; i < games.length; i++) {
      for (var j = 1; j < games[i].length; j++) {
        if (games[i][j].id == e.target.id) {
          setModalInformation({ ...games[i][j] });
          setOpenModal(true);
        }
      }
    }
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const body = (
    <div className={classes.modalHolder}>
      <div className={classes.modalTitleHolder}>
        {
          <img
            src={modalInformation.image}
            className={`${classes.modalImage}`}
          />
        }
        <div className={classes.modalTitle}>{modalInformation.title}</div>
        <IconButton
          style={{ marginLeft: "auto", alignSelf: "flex-start" }}
          onClick={() => handleClose()}
        >
          <CloseIcon />
        </IconButton>
      </div>

      <div id="simple-modal-description" className={classes.modalContent}>
        <p style={{ textAlign: "center" }}>Oops!</p>
        <img
          src={constructionImg}
          className={`${classes.constructionImage} construction-img`}
          id="construction-img"
        />
        <p style={{ textAlign: "center" }}>
          It looks like this game is still under way
        </p>
      </div>
      <div className={classes.bottomButtonHolder}></div>
    </div>
  );

  return (
    <div className={classes.gamesPage}>
      <Tab message="Games" />
      <div className={classes.unitContainers} style={{ marginTop: "30px" }}>
        {unitsToMap
          ? unitsToMap.map((unit) => {
              return (
                <Grid container className={classes.unitBar}>
                  <Grid item xs={4} sm={3} className={classes.unitTitle}>
                    Unit {unit + 1}
                  </Grid>
                  {splitUnits
                    ? splitUnits[unit].map((block) => {
                        return (
                          <Grid container>
                            {block.map((game) => {
                              return (
                                <IndividualGame
                                  classes={classes}
                                  openModal={(e) => handleOpen(e)}
                                  image={game.image}
                                  gameId={game.id}
                                />
                              );
                            })}
                          </Grid>
                        );
                      })
                    : null}
                </Grid>
              );
            })
          : null}
      </div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default Games;
