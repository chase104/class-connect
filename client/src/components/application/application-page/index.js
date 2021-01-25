import React, { useState } from 'react'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'
import BottomBar from '../bottom-bar/index.js'
import Content from '../content/index.js'

const useStyles = makeStyles((theme) => ({
  pageContainer:{
    height: "75vh"
  }
}))



const ApplicationPage = ({ youState, appLocation, changeAppLocation }) => {
  const classes = useStyles()

  const [pageState, setPageState] = useState(null)

  console.log("pageState: ", pageState);
  const changeState = (objectPair) => {
    console.log("changing state");
    console.log(objectPair);
    setPageState({
      ...pageState,
      ...objectPair
    })
  }



  const addStateChangeLocation = (newLocation) => {
    changeAppLocation(newLocation, pageState)
    setPageState(null)
  }
  return (
    <div className={classes.pageContainer}>
      <Content youState={youState} appLocation={appLocation} changeState={(objectPair) => changeState(objectPair)}/>
      <BottomBar appLocation={appLocation} numberOfPages={youState.length} changeAppLocation={(newLocation) => addStateChangeLocation(newLocation)}/>
    </div>
  )
}

export default ApplicationPage
