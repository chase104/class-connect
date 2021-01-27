import React, { useState } from 'react'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'
import Tab from '../../components/tab/index.js'
import TabBar from '../../components/application/tab-bar/index.js'
import ApplicationPage from '../../components/application/application-page/index.js'

const useStyles = makeStyles((theme) => ({
  applicationContainer:{
      backgroundColor: "white",
        minWidth: "70vw",
      maxWidth: "70vh",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "5vh",
}

}))
const Application = () => {
  const classes = useStyles()

  const [appLocation, setAppLocation] = useState(
    [0, 0]
  )
  const [youState, setYouState] = useState([
    [
      {
        type: "title",
        label: "Parent / Guardian Info",
      },
      {
        type: "input",
        key: "firstname",
        location: "01",
        label: "First name",
        answer: null
      },
      {
        type: "input",
        key: "lastname",
        location: "02",
        label: "Last name",
        answer: null
      },
      {
        type: "email",
        key: "email",
        location: "03",
        label: "Email",
        answer: null
      },
      {
        type: "input",
        key: "phone",
        location: "04",
        label: "Phone number",
        answer: null
      },
      {
        type: "input",
        key: "city",
        location: "05",
        label: "City of residence",
        answer: null
      },
      {
        type: "select",
        key: "country",
        location: "06",
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
        location: "11",
        label: "Age",
        answer: null
      },
      {
        type: "select",
        key: "nationality",
        location: "12",
        label: "Nationality",
        answer: null
      },
      {
        type: "select",
        key: "relation",
        location: "13",
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
        key: "firstname",
        location: "21",
        label: "First name",
        answer: null
      },
      {
        type: "input",
        key: "lastname",
        location: "22",
        label: "Last name",
        answer: null
      },
      {
        type: "email",
        key: "email",
        location: "23",
        label: "Email",
        answer: null
      },
      {
        type: "input",
        key: "phone",
        location: "24",
        label: "Phone number",
        answer: null
      },
      {
        type: "input",
        key: "city",
        location: "25",
        label: "City of residence",
        answer: null
      },
      {
        type: "select",
        key: "country",
        location: "26",
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
        location: "31",
        label: "Age",
        answer: null
      },
      {
        type: "select",
        key: "nationality",
        location: "33",
        label: "Nationality",
        answer: null
      },
      {
        type: "select",
        key: "relation",
        location: "34",
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
        location: "01",
        label: "First name",
        answer: null
      },
      {
        type: "input",
        key: "lastname",
        location: "02",
        label: "Last name",
        answer: null
      },
      {
        type: "email",
        key: "email",
        location: "03",
        label: "Email",
        answer: null
      },
      {
        type: "input",
        key: "phone",
        location: "04",
        label: "Phone number",
        answer: null
      },
      {
        type: "input",
        key: "city",
        location: "05",
        label: "City of residence",
        answer: null
      },
      {
        type: "select",
        key: "country",
        location: "06",
        label: "Country of residence",
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
        location: "11",
        label: "Age",
        answer: null
      },
      {
        type: "select",
        key: "nationality",
        location: "12",
        label: "Nationality",
        answer: null
      },
      {
        type: "select",
        key: "relation",
        location: "13",
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
        key: "firstname",
        location: "21",
        label: "First name",
        answer: null
      },
      {
        type: "input",
        key: "lastname",
        location: "22",
        label: "Last name",
        answer: null
      },
      {
        type: "email",
        key: "email",
        location: "23",
        label: "Email",
        answer: null
      },
      {
        type: "input",
        key: "phone",
        location: "24",
        label: "Phone number",
        answer: null
      },
      {
        type: "input",
        key: "city",
        location: "25",
        label: "City of residence",
        answer: null
      },
      {
        type: "select",
        key: "country",
        location: "26",
        label: "Country of residence",
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
        type: "input",
        key: "firstname",
        location: "01",
        label: "First name",
        answer: null
      },
      {
        type: "input",
        key: "lastname",
        location: "02",
        label: "Last name",
        answer: null
      },
      {
        type: "email",
        key: "email",
        location: "03",
        label: "Email",
        answer: null
      },
      {
        type: "input",
        key: "phone",
        location: "04",
        label: "Phone number",
        answer: null
      },
      {
        type: "input",
        key: "city",
        location: "05",
        label: "City of residence",
        answer: null
      },
      {
        type: "select",
        key: "country",
        location: "06",
        label: "Country of residence",
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
        location: "11",
        label: "Age",
        answer: null
      },
      {
        type: "select",
        key: "nationality",
        location: "12",
        label: "Nationality",
        answer: null
      },
      {
        type: "select",
        key: "relation",
        location: "13",
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
        key: "firstname",
        location: "21",
        label: "First name",
        answer: null
      },
      {
        type: "input",
        key: "lastname",
        location: "22",
        label: "Last name",
        answer: null
      },
      {
        type: "email",
        key: "email",
        location: "23",
        label: "Email",
        answer: null
      },
      {
        type: "input",
        key: "phone",
        location: "24",
        label: "Phone number",
        answer: null
      },
      {
        type: "input",
        key: "city",
        location: "25",
        label: "City of residence",
        answer: null
      },
      {
        type: "select",
        key: "country",
        location: "26",
        label: "Country of residence",
        answer: null
      },
    ],

  ])


  const changeAppLocation = (newLocation, pageState) => {
    console.log(newLocation);
    console.log(pageState);
    let newState
    if (appLocation[0] == 0) {
      // youState
        newState = youState
        if (pageState != null) {
          Object.keys(pageState).map((key) => {
            newState[key.charAt(0)][key.charAt(1)].answer = pageState[key]
            console.log(newState);
          })
          setYouState([
            ...newState
          ])
        }
        if (newLocation == "next") {
          if (appLocation[1] == youState.length-1) {
            setAppLocation([appLocation[0]+1, 0])
          } else {
            setAppLocation([appLocation[0], appLocation[1]+1])
          }
        } else if (newLocation == "back") {
          setAppLocation([appLocation[0], appLocation[1]-1])
        } else {
          setAppLocation([appLocation[0], newLocation])
        }

    } else if (appLocation[0] == 1) {
      // studentState

      newState = studentState
      if (pageState != null) {
        Object.keys(pageState).map((key) => {
          newState[key.charAt(0)][key.charAt(1)].answer = pageState[key]
          console.log(newState);
        })
        setStudentState([
          ...newState
        ])
      }
      if (newLocation == "next") {
        if (appLocation[1] == studentState.length-1) {
          setAppLocation([appLocation[0]+1, 0])
        } else {
          setAppLocation([appLocation[0], appLocation[1]+1])
        }
      } else if (newLocation == "back") {
        console.log(appLocation);
        if (appLocation[1] == 0 && appLocation[0] != 0) {
          console.log("backing");
          setAppLocation([0, youState.length-1])
        } else {
          setAppLocation([appLocation[0], appLocation[1]-1])
        }
      } else {
        setAppLocation([appLocation[0], newLocation])
      }

    } else {
      // planState
    }



  }

  return (
    <div style={{marginBottom: "10vh",}}>
      <Tab message="Application"/>
      <div className={classes.applicationContainer}>
        <TabBar appLocation={appLocation}/>
        <ApplicationPage youState={youState} studentState={studentState} planState={planState} appLocation={appLocation} changeAppLocation={(newLocation, pageState) => changeAppLocation(newLocation, pageState)}/>
      </div>
    </div>

  )
}

export default Application
