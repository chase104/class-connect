import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import elmoGif from '../../assets/images/elmo.gif'
import elmoConfusedGif from '../../assets/images/elmo.gif'

import { FormContext } from "../../contexts";

import Tab from "../../components/tab/index.js";
import PlanComparison from "../../components/plans/comparison/index.js";
import QuestionPrompt from "../../components/question-prompt/index.js";

import "./styles.css";

const useStyles = makeStyles((theme) => ({
  rowOneContainer: {
    marginTop: "5vh",
    justifyContent: "center",
    minHeight: "40vh",
    maxHeight: "40vh",
    height: "40vh",
    overflow: "hidden",
  },
  homeAboutContainer: {
    height: "40vh",
    position: "relative",
  },
  textHolder: {
    textAlign: "justify",
    padding: 16,
    fontSize: "24px",
  },
  playerWrapper: {
    position: "relative",
    paddingTop: "56.25% " /* Player ratio: 100 / (1280 / 720) */,
  },

  reactPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  modalHolder:{
    width: "70%",
    [theme.breakpoints.down('xs')]: {
      width: "90%"
    },
    maxHeight: "70vh",

    backgroundColor: "#1fc3cd",
    border: "2px solid black",
    boxShadow: "10px 10px 10px black",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20vh",
  },
  modalTitleHolder:{
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    width: "100%",
  fontWeight: "bold",
  fontSize: "32px",
  color: "white",
  [theme.breakpoints.down('xs')]: {
    fontSize: "18px"
  }
},
  modalTitle:{
    marginLeft: "auto",
    marginRight: "auto"
  },
  modalContent:{
    color: "white",
    marginTop: "4vh",
    marginBottom: "8vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontWeight: "bold",
    marginLeft: "20px",
    marginRight: "20px",
    letterSpacing: "1px",
    fontSize: "20px"
  },
  closeButton:{
    position: "absolute",
  },
  gif:{
    width: "50%",
    maxWidth: "300px",
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  readMore:{
    position: "absolute",
      top: "0",
      height: "40vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "40px",
      color: "white",
      backgroundColor: "#1FC3CD",
      opacity: "0",
      transition: "500ms",
      transitionProperty: "opacity",
      '&:hover': {
        opacity: "0.95",
        cursor: "pointer"
      }
  },
  hideScrollbar:{
    overflow: "scroll",
    scrollbarWidth: "none",
    '&::-webkit-scrollbar': {
      display: "none"
    }
  }
}));

const HomePage = (props) => {
  const classes = useStyles()



  const { plans, applicationStatus, setStatus } = useContext(FormContext);

  const [planData, setPlanData] = useState(plans)
  const [applicationResult, setApplicationResult] = useState(false)
  const [applicationModal, setApplicationModal] = useState(false)
  const [email, setEmail] = useState(false)

    useEffect(() => {
      if (applicationStatus == true) {
        setApplicationResult(true)
        setApplicationModal(true)
      }
      window.scrollTo(0,0)
    }, [])

  const successMessage = (
    <div  className={classes.modalHolder}>
      <div className={classes.modalTitleHolder}>

        <div className={classes.modalTitle}>Success!</div>
        <IconButton className={classes.closeButton} onClick={() => closeModal()}>
          <CloseIcon />
        </IconButton>
      </div>

      <div id="simple-modal-description" className={classes.modalContent}>
        <p style={{textAlign: "center"}}>Oops!</p>
        <p style={{textAlign: "center"}}>It looks like this game is still under way</p>
      </div>

    </div>
  )
  const modalMessage = (
    <div  className={`${classes.modalHolder} ${classes.hideScrollbar}`}>
      <div className={classes.modalTitleHolder}>
        <div className={classes.modalTitle}>{applicationResult ? "Congratulations!" : "Oops!"}</div>
        <IconButton className={classes.closeButton} onClick={() => closeModal()}>
          <CloseIcon />
        </IconButton>
      </div>
      {
        applicationResult ?
        <img src={elmoGif} className={classes.gif}/>
        :
        <img src={elmoConfusedGif} className={classes.gif}/>
      }

      <div id="simple-modal-description" className={classes.modalContent}>
        <p style={{textAlign: "center"}}>
        {applicationResult ?
          <div>Your application has been successfully submitted! We've sent a copy of your application to
          {
            <div style={{fontWeight:"bold", fontSize: "24px"}}>{email}</div>
          } The email also explains what'll happen next.</div>
          :
          <div>It looks like something went wrong and your application wasn't submitted. Please contact our Educational Assistance Team for help.</div>
        }
        </p>
        <p style={{textAlign: "center"}}>{
          applicationResult ?
            "The average application takes about 4 days to process, so be on the lookout for the email!"
            : "It looks like something went wrong and your application wasn't submitted. Please contact our Educational Assistance Team for help."
        }</p>
      </div>
    </div>
  )



  const closeModal = () => {
    setApplicationModal(false)
    setStatus(false)
  }

  return (
    <div style={{ marginBottom: "10vh" }}>
      <Tab message="Home" />
      <Grid container className={classes.rowOneContainer}>
        <Grid item xs={11} sm={10}>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid xs={6} sm={6} md={6}>
              <div className={classes.playerWrapper}>
                <ReactPlayer
                  className={classes.reactPlayer}
                  url="https://www.youtube.com/watch?v=UalTfOIDQ7M"
                  width="100%"
                  height="40vh"
                />
              </div>
            </Grid>
            <Grid xs={6} sm={6} md={6} style={{ backgroundColor: "white" }}>
              <Link to="/about" className="no-decoration">
                <div className={`${classes.homeAboutContainer} `}>
                  <div className={classes.textHolder}>
                    <Typography variant="body1">
                      LearningLab is a modern online school that can offer
                      interactive language classes with native-speaking teachers
                      to you child. Our focus on learning through gamification,
                      which is on the cutting edge of language education,
                      ensures learning that's meaningful, permanent, and fun.
                      Classes are held completely online through our
                      lightning-fast platform. Our platform gives students a
                      completely different online-class experience. Students
                      don't simply watch a screen, but have the ability to
                      inteact with class content. Teachers host games that focus
                      on teaching concepts, vocabulary, and grammar. We believe
                      in teaching in a much more interactive way.
                    </Typography>
                  </div>
                  <div className={classes.readMore}>Read More</div>
                </div>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <PlanComparison
        props={props}
        homepage={true}
        benefits={[plans[1].benefits, plans[2].benefits, plans[3].benefits]}
        types={[plans[1].type, plans[2].type, plans[3].type]}
      />
      <QuestionPrompt props={props} />
      <Modal
      open={applicationModal}
      onClose={closeModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      disableScrollLock={true}

      >
      {
        modalMessage
      }
      </Modal>
    </div>
  );
};

export default HomePage;
