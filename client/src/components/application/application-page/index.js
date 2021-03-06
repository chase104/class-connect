import React, { useState, useEffect } from "react";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import BottomBar from "../bottom-bar/index.js";
import Content from "../content/index.js";
import TabBar from "../tab-bar/index.js";
const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

const ApplicationPage = ({
  youState,
  setYouState,
  studentState,
  setStudentState,
  planState,
  setPlanState,
  appLocation,
  setAppLocation,
  changeAppLocation,
  submitApplication,
}) => {
  const classes = useStyles();

  const [pageState, setPageState] = useState(null);

  const changeState = (objectPair) => {
    setPageState({
      ...pageState,
      ...objectPair,
    });
  };

  useEffect(() => {}, [appLocation]);

  const addStateChangeLocation = (newLocation, tab) => {
    if (tab) {
      changeAppLocation(
        newLocation,
        pageState,
        tab,
        appLocation,
        setAppLocation,
        youState,
        setYouState,
        studentState,
        setStudentState,
        planState,
        setPlanState);
      setPageState(null);
    } else {
      changeAppLocation(
        newLocation,
        pageState,
        null,
        appLocation,
        setAppLocation,
        youState,
        setYouState,
        studentState,
        setStudentState,
        planState,
        setPlanState);
      setPageState(null);
    }
  };

  return (
    <div className={classes.pageContainer}>
      <TabBar
        appLocation={appLocation}
        changeAppLocation={(newLocation, tab) =>
          addStateChangeLocation(newLocation, tab)
        }
      />
      <BottomBar
        appLocation={appLocation}
        numberOfPages={
          appLocation[0] == 0
            ? youState.length
            : appLocation[0] == 1
            ? studentState.length
            : planState.length
        }
        changeAppLocation={(newLocation) => addStateChangeLocation(newLocation)}
      />
      <Content
        youState={youState}
        studentState={studentState}
        planState={planState}
        appLocation={appLocation}
        changeState={(objectPair) => changeState(objectPair)}
        submitApplication={() => submitApplication()}
      />
    </div>
  );
};

export default ApplicationPage;
