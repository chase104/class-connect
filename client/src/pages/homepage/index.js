import React from 'react'
import Tab from '../../components/tab/index.js'
import VideoPlayer from '../../components/home-components/video-player/index.js'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  rowOneContainer: {
    marginTop: "5vh",
    justifyContent: "center",
    minHeight: "40vh",
    maxHeight: "40vh",
    height: "40vh",
    overflow: "hidden"

  },
  homeAboutContainer:{
    height: "40vh",
  },
  textHolder:{
    textAlign: "justify",
    padding: "0px 8px",
  }

}))
const HomePage = () => {
  const classes = useStyles()
  return (
    <div>
      <Tab message="Home"/>
      <Grid container className={classes.rowOneContainer}>
        <Grid item xs={11} sm={10}>
          <Grid container style={{justifyContent: "center"}}>
            <Grid xs={6} sm={6} md={6}>
              <VideoPlayer />
            </Grid>
            <Grid xs={6} sm={6} md={6} style={{backgroundColor: "white", }}>
              <div className={classes.homeAboutContainer}>
                <div className={classes.textHolder}>
                  LearningLab is a modern online school that can offer interactive language classes with native-speaking teachers to you child. Our focus on learning through gamification, which is on the cutting edge of language education, ensures learning that's meaningful, permanent, and fun.
                </div>
              </div>

            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}

export default HomePage
