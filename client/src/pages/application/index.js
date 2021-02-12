import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Provider from "../../contexts";

import Tab from "../../components/tab/index.js";
import ApplicationPage from "../../components/application/application-page/index.js";

import { changeAppLocation, submitApplication } from "./application.utils";
import "./styles.css";

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
  const classes = useStyles();
  const {
    appLocation,
    setAppLocation,
    youState,
    setYouState,
    planState,
    setPlanState,
  } = useContext(Provider);

  // axios({
  //   method: "POST",
  //   url: "/submit-application",
  //   data: applicationData
  // }).then((res) => {
  //   console.log(res);
  // })

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
