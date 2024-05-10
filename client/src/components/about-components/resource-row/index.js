import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import treasureMap from "../../../assets/images/treasure-map.png";
import "./styles.css";
import { IconButton, Typography, Button } from "@material-ui/core";
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
import consultation from "../../../assets/images/consultation.png";
import application from "../../../assets/images/application.png";
import calendar from "../../../assets/images/calendar.png";
import startclass from "../../../assets/images/startclass.png";
import report from "../../../assets/images/report.png";
import Resource from "../resource-block/index.js";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { Document, Page } from "react-pdf";
import WebViewer from "@pdftron/webviewer";

const useStyles = makeStyles((theme) => ({
  rowOneContainer: {
    minHeight: "32vh",
  },
  rowOneTextHolder: {
    backgroundColor: "var(--color-primary)",
    color: "white",
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
    maxWidth: "80%",
    maxHeight: "136px",
    marginTop: "auto",
    marginBottom: "auto",
  },
  resourceContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  modalHolder: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
    maxHeight: "50vh",
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
    overflow: "auto",
    whiteSpace: "pre-line",
  },
  bottomButtonHolder: {
    display: "flex",
    alignItems: "center",
  },
  bottomButton: {
    boxShadow: "4px 4px 3px darkslategrey",
  },
}));

const ResourceRow = (props) => {
  const classes = useStyles();

  let { type, title, subtitle } = props;

  const [backgroundColor, setBackgroundColor] = useState(null);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalInformation, setModalInformation] = useState({ id: "6" });

  const handleOpen = (e) => {
    console.log("handeling top level open");
    if (e.target.id <= 5) {
      setModalInformation({
        ...resourceInformation[e.target.id],
        modalTitle: "Your Resources",
      });
    } else {
      switch (e.target.id) {
        case "6":
          setModalInformation({
            ...stepInformation[0],
            modalTitle: "First Steps",
          });
          break;
        case "7":
          setModalInformation({
            ...stepInformation[1],
            modalTitle: "First Steps",
          });
          break;
        case "8":
          setModalInformation({
            ...stepInformation[2],
            modalTitle: "First Steps",
          });
          break;
        case "9":
          setModalInformation({
            ...stepInformation[3],
            modalTitle: "First Steps",
          });
          break;
      }
    }
    console.log("setting modal open");
    setOpenModal(true);
  };
  useEffect(() => {
    console.log("modal info changed");
  }, [modalInformation]);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleBarClick = (e) => {
    const rowText = document.getElementById("row-one");
    if (rowText.classList.contains("expand")) {
      rowText.classList.remove("expand");
    } else {
      rowText.classList.add("expand");
    }
    setDropdownActive(!dropdownActive);
  };

  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const [individualDescriptions, setIndividiualDescriptions] = useState([
    "When you sign up with LearningLab, you're signing up with an interactive education. Our students enjoy fun yet purposeful classes that allow them to constantly use their agency rather than sit silently in a classroom. Our classes are interactive not only between student and teacher, but between student and content. Traditional educational content is static. There's no interaction or meaningful integration with the material. Here at LearningLab, things are different. We utilize modern technology to offer our students content that they are able to interact with.",
    "While you're subscribed to classes with us, you'll have unlimited access to all lesson materials both before and after the actual class. This allows our students to get the most out of the material. On top of this, although we have a heavy focus on interactivity, we understand the benefits of traditional learning. Each lesson will have attached with it a 'materials sheet' that not only has the class content on it, but also has traditional style activities for learning the content in that way too.",
    "LearningLab offers a suite of tailor-made games to you while you're subscribed. The games vary on level meaning that more difficult games that are related to higher-level content are only available when a student has reached that level. Our games are made to primarily be fun and reinforce content taught or to-be-taught in our classes.",
    "Our highly-trained Educational Assistance Team is available to you to help with anything from organizing your class schedule to helping with tech issues. The team's customer service rating is currently 4.5 starts. We encourage you to also leave a review here! To keep assistance flowing smoothly, we ask that you email for non-time sensative matters and call for time-sensative matters.",
    "With your subscription to LearningLab you'll have access to detailed progress reports. These reports are generated by our highly-developed system and reviewed by our of our resident education experts. After reviewing a report, our expert will approve it and possibly schedule a short meeting if they have any concerns. You'll have access to one progress report each educational period.",
    "We pride ourselves on our thoroughly-developed FAQ system. On our FAQ page you can find answers to many of the questions you may have. You may also submit your own question there to receive a response from our Educational Assistance Team.",
    "Here at LearningLab we are so convinced that you'll love our classes that we offer you a free consultation with a member of our Educational Assistance Team. In this consultation you can have all your questions answered by a devoted member of our team.",
    "Get started on your journey by filling out an application!",
    "After submitting your application, just wait for a response from our Educational Assitance Team! This usually takes about a week. Check the status of your application below.",
    "After receiving and approving your schedule, you're ready to start classes!",
  ]);

  const bottomButtons = () => {
    let href;
    let buttonContent;
    let externalLink = true;
    console.log("bottom buttons, ", modalInformation.id);
    switch (modalInformation.id) {
      case 0:
        href = "https://www.youtube.com/watch?v=FqsO1AK2OzE";
        buttonContent = "View Sample Class";
        break;
      case 1:
        href = "/pdfpage";
        buttonContent = "Example Materials";
        externalLink = false;
        break;
      case 2:
        href = "/games";
        buttonContent = "Games Page";
        externalLink = false;
        break;
      case 3:
        href = {
          pathname: "/faq",
          state: "FROM CONTACT",
        };
        externalLink = false;
        buttonContent = "Contact team";
        break;
      case 4:
        href = "https://www.youtube.com/watch?v=E_z6SWNTOak";
        break;
      case 5:
        href = "/faq";
        buttonContent = "View Faq";
        externalLink = false;

        break;
      case 6:
        href = "/consultation";
        buttonContent = "Request Consultation";
        externalLink = false;

        break;
      case 7:
        href = {
          pathname: "/application",
          state: "FROM CONTACT",
        };
        buttonContent = "Start Application";
        externalLink = false;
        break;
      case 8:
        href = "https://www.youtube.com/watch?v=E_z6SWNTOak";
        break;
      case 9:
        href = "https://www.youtube.com/watch?v=E_z6SWNTOak";
        buttonContent = "View Sample Class";
        break;
    }
    let myButton = (
      <Button
        className={`${classes.bottomButton} color-secondary  bottom-button`}
      >
        {buttonContent}
      </Button>
    );
    let finalButton;
    if (externalLink) {
      finalButton = (
        <a
          target="_"
          href={href}
          className="no-decoration"
          style={{ marginLeft: "auto", marginRight: "5vw" }}
        >
          {myButton}
        </a>
      );
    } else {
      finalButton = (
        <Link to={href} className="no-decoration">
          {myButton}
        </Link>
      );
    }
    if (buttonContent) {
      console.log(finalButton);
      return finalButton;
    }
  };

  const body = (
    <div className={classes.modalHolder}>
      <div className={classes.modalTitleHolder}>
        {modalInformation.id == 5 ||
        modalInformation.id == 6 ||
        modalInformation.id == 8 ? (
          <img
            src={modalInformation.image}
            className={`${classes.modalImage} ${classes.whiteBackground}`}
          />
        ) : (
          <img
            src={modalInformation.image}
            className={`${classes.modalImage} `}
          />
        )}
        <div className={classes.modalTitle}>{modalInformation.title}</div>
        <IconButton
          style={{ marginLeft: "auto", alignSelf: "flex-start" }}
          onClick={() => handleClose()}
        >
          <CloseIcon style={{ color: "white" }} />
        </IconButton>
      </div>

      <p id="simple-modal-description" className={classes.modalContent}>
        {individualDescriptions[modalInformation.id]}
      </p>

      <div className={classes.bottomButtonHolder}>{bottomButtons()}</div>
    </div>
  );

  const [resourceInformation, setResourceInformation] = useState([
    {
      id: 0,
      title: "Interactive Classes",
      style: { borderRadius: "20px" },
      image: computers,
    },
    {
      id: 1,
      title: "Lesson Material Access",
      style: { width: "80%" },
      image: documents,
    },
    {
      id: 2,
      title: "Interactive Games",
      style: { width: "80%", borderRadius: "20px" },
      image: game,
    },
    {
      id: 3,
      title: "Education Assistance Team",
      style: { width: "80%" },
      image: headphones,
    },
    {
      id: 4,
      title: "Progress Reports",
      style: { width: "80%" },
      image: report,
    },
    {
      id: 5,
      title: "FAQ Page",
      style: {
        width: "70%",
        borderRadius: "20px",
        backgroundColor: "white",
        padding: "8px",
      },
      image: question,
    },
  ]);
  const [stepInformation, setStepInformation] = useState([
    {
      id: 6,
      title: "Free Consultation (optional)",
      style: { borderRadius: "20px" },
      image: consultation,
    },
    {
      id: 7,
      title: "Submit Application",
      style: { borderRadius: "20px", width: "80%" },
      image: application,
    },
    {
      id: 8,
      title: "Await Approval and Confirm Schedule (1-week wait)",
      style: { borderRadius: "20px", width: "80%" },
      image: calendar,
    },
    {
      id: 9,
      title: "Start Classes!",
      style: { borderRadius: "20px", width: "80%" },
      image: startclass,
    },
  ]);

  return (
    <div style={{ margin: "45px 5% 0px 5%" }}>
      <div className={classes.titleHolderDiv}>
        <div className={classes.rowTitle}>{title}</div>
        <div className={classes.rowSubtitle}>{subtitle}</div>
      </div>
      <Grid container className={classes.rowOneContainer}>
        <Grid item xs={12} sm={12} md={12} style={{ display: "flex" }}>
          {type == "resource" ? (
            <Grid container style={{ minHeight: "32vh" }}>
              {resourceInformation.map((resource) => (
                <Resource
                  openModal={(e) => handleOpen(e)}
                  id={resource.id}
                  title={resource.title}
                  style={resource.style}
                  classes={classes}
                  image={resource.image}
                  type={type}
                />
              ))}
            </Grid>
          ) : (
            <Grid container className="resource-row-container">
              {stepInformation.map((step) => (
                <Resource
                  openModal={(e) => handleOpen(e)}
                  id={step.id}
                  title={step.title}
                  style={step.style}
                  classes={classes}
                  image={step.image}
                  type={type}
                />
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
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

export default ResourceRow;
