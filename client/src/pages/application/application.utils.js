import axios from "axios";

export const changeAppLocation = (newLocation, pageState, tab) => {
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

export const submitApplication = () => {
  let applicationData = [];

  const processSection = (section) => {
    let sectionArray = [];
    sectionArray.push({ sectionTitle: section[0].label });
    for (var i = 1; i < section.length + 1; i++) {
      if (i == section.length) {
        applicationData.push(sectionArray);
      } else {
        sectionArray.push({ [section[i].key]: section[i].answer });
      }
    }
  };

  youState.map((section) => {
    processSection(section);
  });
  studentState.map((section) => {
    processSection(section);
  });
  planState.map((section) => {
    processSection(section);
  });

  axios({
    method: "POST",
    url: "/submit-application",
    data: {
      email: youState[0][3].answer,
      applicationData: applicationData,
      submitDate: new Date(),
      studentName: studentState[0][1].answer + " " + studentState[0][2].answer,
      applicationStatus: "pending",
    },
  }).then((res) => {
    props.history.push("/");
  });
};
