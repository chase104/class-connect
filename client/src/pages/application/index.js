<<<<<<< HEAD
import React, { useState, useEffect, useContext } from "react";

import "./styles.css";
=======
import React, { useContext } from "react";
>>>>>>> 5272324dcfebef2637b246b6cd0cbb7bd43b5286
import { makeStyles } from "@material-ui/core/styles";

import { Context } from "../../contexts";

import Tab from "../../components/tab/index.js";
<<<<<<< HEAD
import TabBar from "../../components/application/tab-bar/index.js";
import { AppContext } from '../../App.js'
import ApplicationPage from "../../components/application/application-page/index.js";
import axios from "axios";
import { saveAs } from 'file-saver'
const useStyles = makeStyles((theme) => ({
  applicationContainer:{
      backgroundColor: "transparent",
      minWidth: "70vw",
      maxWidth: "70vh",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "5vh",
      marginBottom: "10vh"
},
  reviewContainer:{
      backgroundColor: "transparent",
      minWidth: "85vw",
      maxWidth: "85vh",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "5vh",
      marginBottom: "10vh"
}
=======
import ApplicationPage from "../../components/application/application-page/index.js";

import { changeAppLocation, submitApplication } from "./application.utils";
import "./styles.css";
>>>>>>> 5272324dcfebef2637b246b6cd0cbb7bd43b5286

const useStyles = makeStyles((theme) => ({
  applicationContainer: {
    backgroundColor: "transparent",
    minWidth: "70vw",
    maxWidth: "70vh",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5vh",
    marginBottom: "10vh",
  },
  reviewContainer: {
    backgroundColor: "transparent",
    minWidth: "85vw",
    maxWidth: "85vh",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5vh",
    marginBottom: "10vh",
  },
}));

const Application = (props) => {
<<<<<<< HEAD
  const classes = useStyles()
  const [appLocation, setAppLocation] = useState([0, 0])
  const [youState, setYouState] = useState([
    [
      {
        type: "title",
        label: "Parent / Guardian Info",
      },
      {
        type: "input",
        key: "firstname",
        location: "001",
        label: "First name",
        answer: null,
      },
      {
        type: "input",
        key: "lastname",
        location: "002",
        label: "Last name",
        answer: null,
      },
      {
        type: "input",
        key: "email",
        location: "003",
        label: "Email",
        answer: null,
      },
      {
        type: "input",
        key: "phone",
        location: "004",
        label: "Phone number",
        answer: null,
      },
      {
        type: "input",
        key: "city",
        location: "005",
        label: "City of residence",
        answer: null,
      },
      {
        type: "select",
        key: "country",
        location: "006",
        label: "Country of residence",
        answer: null,
      },
    ],

    [
      {
        type: "title",
        label: "Parent / Guardian Info Cont.",
      },
      {
        type: "input",
        key: "age",
        location: "011",
        label: "Age",
        answer: null,
      },
      {
        type: "select",
        key: "nationality",
        location: "012",
        label: "Nationality",
        answer: null,
      },
      {
        type: "select",
        key: "relation",
        location: "013",
        label: "Relation To Student",
        answer: null,
      },
    ],

    [
      {
        type: "title",
        label: "Parent / Guardian 2 Info",
      },
      {
        type: "input",
        key: "firstname",
        location: "021",
        label: "First name",
        answer: null,
      },
      {
        type: "input",
        key: "lastname",
        location: "022",
        label: "Last name",
        answer: null,
      },
      {
        type: "input",
        key: "email",
        location: "023",
        label: "Email",
        answer: null,
      },
      {
        type: "input",
        key: "phone",
        location: "024",
        label: "Phone number",
        answer: null,
      },
      {
        type: "input",
        key: "city",
        location: "025",
        label: "City of residence",
        answer: null,
      },
      {
        type: "select",
        key: "country",
        location: "026",
        label: "Country of residence",
        answer: null,
      },
    ],
    [
      {
        type: "title",
        label: "Parent / Guardian 2 Info Cont.",
      },
      {
        type: "input",
        key: "age",
        location: "031",
        label: "Age",
        answer: null,
      },
      {
        type: "select",
        key: "nationality",
        location: "032",
        label: "Nationality",
        answer: null,
      },
      {
        type: "select",
        key: "relation",
        location: "033",
        label: "Relation To Student",
        answer: null,
      },
    ],

  ]);
  const [studentState, setStudentState] = useState([
    [
      {
        type: "title",
        label: "Student Info",
      },
      {
        type: "input",
        key: "first-name",
        location: "101",
        label: "First name",
        answer: null,
      },
      {
        type: "input",
        key: "last-name",
        location: "102",
        label: "Last name",
        answer: null,
      },
      {
        type: "input",
        key: "city",
        location: "103",
        label: "City of residence",
        answer: null,
      },
      {
        type: "select",
        key: "country",
        location: "104",
        label: "Country of residence",
        answer: null,
      },
      {
        type: "select",
        key: "nationality",
        location: "105",
        label: "Nationality",
        answer: null,
      },
    ],
    [
      {
        type: "title",
        label: "Student Info Cont.",
      },
      {
        type: "input",
        key: "age",
        location: "111",
        label: "Age",
        answer: null,
      },
      {
        type: "input",
        key: "grade",
        location: "112",
        label: "Current School Year",
        answer: null,
      },
      {
        type: "input",
        key: "years-studied",
        location: "113",
        label: "Years Studying English",
        answer: null,
      },
      {
        type: "select",
        key: "level",
        location: "114",
        label: "English Skill Level",
        answer: null,
      },
    ],
  ]);
  const [planState, setPlanState] = useState([
    [
      {
        type: "title",
        label: "Select Plan",
      },
      {
        type: "select",
        key: "plan",
        location: "201",
        label: "Your Plan",
        answer: null,
      },
      {
        type: "calendar",
        key: "startdate",
        location: "202",
        label: "Desired Start Date",
        answer: null,
      },
    ],
  ]);


  const changeAppLocation = (newLocation, pageState, tab) => {
    let boolean;
    let newState;
    const navigate = (stateLength, type) => {
      let previousPageLastPart;
      switch (type) {
        case "student":
          previousPageLastPart = youState.length - 1;
          break;
        case "plan":
          previousPageLastPart = studentState.length - 1;
          break;
        case "review":
          previousPageLastPart = planState.length - 1;
          break;
      }

      if (newLocation == "next") {
        type == "review"
          ? console.log("impossible")
          : appLocation[1] == stateLength
          ? setAppLocation([parseInt(appLocation[0]) + 1, 0])
          : setAppLocation([appLocation[0], appLocation[1] + 1]);
      } else if (newLocation == "back") {
        appLocation[1] == 0
          ? type == "you"
            ? console.log("impossible")
            : setAppLocation([appLocation[0] - 1, previousPageLastPart])
          : setAppLocation([appLocation[0], appLocation[1] - 1]);
      } else if (tab) {
        setAppLocation([newLocation, 0]);
      } else {
        setAppLocation([appLocation[0], newLocation]);
      }
    };
    if (appLocation[0] == 0) {
      // youState
      newState = youState;
      // if answers, change state
      if (pageState != null) {

        Object.keys(pageState).map((key) => {
          newState[key.charAt(1)][key.charAt(2)].answer = pageState[key];
        });
        setYouState([...newState]);
      }
      navigate(youState.length - 1, "you");
    } else if (appLocation[0] == 1) {
      // studentState
      newState = studentState;

      if (pageState != null) {
        Object.keys(pageState).map((key) => {
          newState[key.charAt(1)][key.charAt(2)].answer = pageState[key];
        });
        setStudentState([...newState]);
      }
      navigate(studentState.length - 1, "student");
    } else if (appLocation[0] == 2) {
      // planState
      newState = planState;
      if (pageState != null) {
        Object.keys(pageState).map((key) => {
          newState[key.charAt(1)][key.charAt(2)].answer = pageState[key];
        });
        setPlanState([...newState]);
      }
      navigate(planState.length - 1, "plan");
    } else {
      navigate(null, "review");
    }
  };

  const setEmail = useContext(AppContext).setEmail
  const toggleApplication = useContext(AppContext).toggleApplication

  const submitApplication = () => {
    let applicationData = [];
    let email
    let parentName = null
    let namecounter = 0;

  const processSection = (section, isYouState) => {
      let sectionArray = [];
      sectionArray.push({ sectionTitle: section[0].label });

      for (var i = 1; i < section.length + 1; i++) {
        if (i == section.length) {
          applicationData.push(sectionArray);
        } else {
          let typeBoolean = false
          if (section[i].key == "firstname" || section[i].key == "lastname") {
            typeBoolean = true
          }
          if (isYouState && section[i].key == "email" && section[i].answer != null && email == null) {
            email = section[i].answer
            sectionArray.push({ [section[i].key]: section[i].answer });
          } else if (isYouState && typeBoolean && namecounter < 2 && section[i].answer != null) {
            console.log(parentName, section[i].answer);
            parentName == null ? parentName = section[i].answer : parentName = `${parentName} ${section[i].answer}`;
            sectionArray.push({ [section[i].key]: section[i].answer });
          } else {
            sectionArray.push({ [section[i].key]: section[i].answer });
          }
        }
      }
    };

    youState.map((section) => {
      processSection(section, true);
    });
    studentState.map((section) => {
      processSection(section);
    });
    planState.map((section) => {
      processSection(section)
    })
    console.log("submitting...");
    console.log(applicationData);
    axios({
      method: "POST",
      url: "/submit-application",
      data: {
        email: email,
        applicationData: applicationData,
        submitDate: new Date(),
        studentName: studentState[0][1].answer + " " + studentState[0][2].answer,
        parentName: parentName,
        applicationStatus: "pending",
      }
    }).then((res) => {
      if (res.status == "201") {
        console.log(res.data.email);
        toggleApplication(true, true, res.data.email)
        props.history.push('/')
        //could make axios call here for email sending
      } else {
        toggleApplication(true, false)
        props.history.push('/')
      }
    })

  }



=======
  const classes = useStyles();
  const {
    appLocation,
    setAppLocation,
    youState,
    setYouState,
    planState,
    setPlanState,
    studentState,
    setStudentState,
  } = useContext(Context);
>>>>>>> 5272324dcfebef2637b246b6cd0cbb7bd43b5286

  return (
    <div style={{ marginBottom: "10vh" }}>
      <Tab message="Application" />
      <div
        className={
          appLocation[0] == 3
            ? classes.reviewContainer
            : classes.applicationContainer
        }
      >
        <ApplicationPage
          youState={youState}
          studentState={studentState}
          planState={planState}
          appLocation={appLocation}
          changeAppLocation={changeAppLocation}
          submitApplication={submitApplication}
        />
      </div>
    </div>
  );
};

export default Application;
