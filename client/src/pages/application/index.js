import React, { useState, useEffect } from 'react'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'
import Tab from '../../components/tab/index.js'
import TabBar from '../../components/application/tab-bar/index.js'
import ApplicationPage from '../../components/application/application-page/index.js'
import axios from 'axios'

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

}))
const Application = () => {
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
        answer: null
      },
      {
        type: "input",
        key: "lastname",
        location: "002",
        label: "Last name",
        answer: null
      },
      {
        type: "input",
        key: "email",
        location: "003",
        label: "Email",
        answer: null
      },
      {
        type: "input",
        key: "phone",
        location: "004",
        label: "Phone number",
        answer: null
      },
      {
        type: "input",
        key: "city",
        location: "005",
        label: "City of residence",
        answer: null
      },
      {
        type: "select",
        key: "country",
        location: "006",
        label: "Country of residence",
        answer: null
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
        answer: null
      },
      {
        type: "select",
        key: "nationality",
        location: "012",
        label: "Nationality",
        answer: null
      },
      {
        type: "select",
        key: "relation",
        location: "013",
        label: "Relation To Student",
        answer: null
      },
    ],

    [
      {
        type: "title",
        label: "Parent / Guardian 2 Info",
      },
      {
        type: "input",
        key: "01",
        location: "021",
        label: "First name",
        answer: null
      },
      {
        type: "input",
        key: "lastname",
        location: "022",
        label: "Last name",
        answer: null
      },
      {
        type: "email",
        key: "email",
        location: "023",
        label: "Email",
        answer: null
      },
      {
        type: "input",
        key: "phone",
        location: "024",
        label: "Phone number",
        answer: null
      },
      {
        type: "input",
        key: "city",
        location: "025",
        label: "City of residence",
        answer: null
      },
      {
        type: "select",
        key: "country",
        location: "026",
        label: "Country of residence",
        answer: null
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
        answer: null
      },
      {
        type: "select",
        key: "nationality",
        location: "032",
        label: "Nationality",
        answer: null
      },
      {
        type: "select",
        key: "relation",
        location: "033",
        label: "Relation To Student",
        answer: null
      },
    ],

  ])
  const [studentState, setStudentState] = useState([
    [
      {
        type: "title",
        label: "Student Info",
      },
      {
        type: "input",
        key: "firstname",
        location: "101",
        label: "First name",
        answer: null
      },
      {
        type: "input",
        key: "lastname",
        location: "102",
        label: "Last name",
        answer: null
      },
      {
        type: "input",
        key: "city",
        location: "103",
        label: "City of residence",
        answer: null
      },
      {
        type: "select",
        key: "country",
        location: "104",
        label: "Country of residence",
        answer: null
      },
      {
        type: "select",
        key: "nationality",
        location: "105",
        label: "Nationality",
        answer: null
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
        answer: null
      },
      {
        type: "input",
        key: "grade",
        location: "112",
        label: "Current School Year",
        answer: null
      },
      {
        type: "input",
        key: "grade",
        location: "113",
        label: "Years Studying English",
        answer: null
      },
      {
        type: "select",
        key: "level",
        location: "114",
        label: "English Skill Level",
        answer: null
      },
    ],
  ])
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
        answer: null
      },
      {
        type: "calendar",
        key: "startdate",
        location: "202",
        label: "Desired Start Date",
        answer: null
      },

    ],
  ])

useEffect(() => {

}, [appLocation])

  const changeAppLocation = (newLocation, pageState, tab) => {
    console.log("Changing location, contents", newLocation, pageState, tab);
    let boolean
    let newState
    const navigate = (stateLength, type) => {
      let previousPageLastPart
      console.log("in navigate");
      switch(type){
        case "student": previousPageLastPart = youState.length-1;
        break;
        case "plan": previousPageLastPart = studentState.length-1;
        break;
        case "review": previousPageLastPart = planState.length-1;
        break;
      }

      if (newLocation == "next") {
        type == "review" ? console.log("impossible") : appLocation[1] == stateLength ? setAppLocation([parseInt(appLocation[0])+1, 0]) : setAppLocation([appLocation[0], appLocation[1]+1])
      } else if (newLocation == "back") {
        (appLocation[1] == 0) ? type == "you" ? console.log("impossible") : setAppLocation([appLocation[0]-1, previousPageLastPart]) : setAppLocation([appLocation[0], appLocation[1]-1])
      } else if (tab) {
        console.log("tab wins!");
        setAppLocation([newLocation, 0])
      } else {
        setAppLocation([appLocation[0], newLocation])
      }
    }
    if (appLocation[0] == 0) {
      // youState
        newState = youState
        // if answers, change state
        if (pageState != null) {
          console.log(pageState);

          Object.keys(pageState).map((key) => {
            console.log(key);
            newState[key.charAt(1)][key.charAt(2)].answer = pageState[key]
          })
          setYouState([
            ...newState
          ])
        }
        navigate(youState.length-1, "you")
    } else if (appLocation[0] == 1) {
      // studentState
      newState = studentState

      if (pageState != null) {
        Object.keys(pageState).map((key) => {
          newState[key.charAt(1)][key.charAt(2)].answer = pageState[key]
        })
        setStudentState([
          ...newState
        ])
      }
      navigate(studentState.length-1, "student")
    } else if (appLocation[0] == 2) {
      // planState
      newState = planState
      if (pageState != null) {
        Object.keys(pageState).map((key) => {
          console.log("made it to keys");
          newState[key.charAt(1)][key.charAt(2)].answer = pageState[key]
        })
        console.log("past keys");
        setPlanState([
          ...newState
        ])
        console.log("past set");
      }
      navigate(planState.length-1, "plan")
    } else {
      navigate(null, "review")
    }
  }

  const submitApplication = () => {
    console.log("submit function");
    let applicationData = []

    const processSection = (section) => {
      let sectionArray = []
      sectionArray.push({sectionTitle: section[0].label})
      for (var i=1; i<section.length+1; i++) {
        if (i == section.length) {
          applicationData.push(sectionArray)
        } else {
          sectionArray.push({[section[i].key]: section[i].answer})
          }
      }
    }

    youState.map((section) => {
      processSection(section)
    })
    studentState.map((section) => {
      processSection(section)
    })
    planState.map((section) => {
      processSection(section)
    })
      console.log(applicationData);

  }

    // axios({
    //   method: "POST",
    //   url: "/submit-application",
    //   data: applicationData
    // }).then((res) => {
    //   console.log(res);
    // })


  return (
    <div style={{marginBottom: "10vh",}}>
      <Tab message="Application"/>
      <div className={appLocation[0] ==3 ? classes.reviewContainer : classes.applicationContainer}>
        <ApplicationPage
        youState={youState}
        studentState={studentState}
        planState={planState}
        appLocation={appLocation}
        changeAppLocation={(newLocation, pageState, tab) => changeAppLocation(newLocation, pageState, tab)}
        submitApplication={() => submitApplication()}
        />
      </div>
    </div>

  )
}

export default Application
