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



const ApplicationPage = ({ youState, appLocation }) => {
  const classes = useStyles()

  const [pageState, setPageState] = useState()
  console.log("pageState: ", pageState);
  const changeState = (objectPair) => {
    console.log("state changed");
    console.log(objectPair);
    setPageState({
      ...pageState,
      ...objectPair
    })
  }
  return (
    <div className={classes.pageContainer}>
      <Content youState={youState} appLocation={appLocation} changeState={(objectPair) => changeState(objectPair)}/>
      <BottomBar appLocation={appLocation} numberOfPages={youState.length}/>
    </div>
  )
}

export default ApplicationPage
