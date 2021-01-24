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
        label: "Basic Info",
      },
      {
        type: "input",
        key: "firstname",
        label: "First name",
        answer: null
      },
      {
        type: "input",
        key: "lastname",
        label: "Last name",
        answer: null
      },
      {
        type: "email",
        key: "email",
        label: "Email",
        answer: null
      },
      {
        type: "input",
        key: "phone",
        label: "Phone number",
        answer: null
      },
      {
        type: "input",
        key: "city",
        label: "City of residence",
        answer: null
      },
      {
        type: "select",
        key: "country",
        label: "Country of residence",
        answer: null
      },
    ],
    [],
    [],
    [],
    [],
    []
  ])

  return (
    <div style={{marginBottom: "10vh",}}>
      <Tab message="Application"/>
      <div className={classes.applicationContainer}>
        <TabBar appLocation={appLocation}/>
        <ApplicationPage youState={youState} appLocation={appLocation}/>
      </div>
    </div>

  )
}

export default Application
