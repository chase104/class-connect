import React, { useContext } from 'react'
import './styles.css'
import Tab from '../../components/tab/index.js'
import VideoPlayer from '../../components/home-components/video-player/index.js'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import PlanComparison from '../../components/plans/comparison/index.js'
import { PlanContext } from '../../App'
import QuestionPrompt from '../../components/question-prompt/index.js'

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
    position: "relative"
  },
  textHolder:{
    textAlign: "justify",
    padding: "0px 8px",
    fontSize: "24px"
  }

}))



const HomePage = (props) => {
  const classes = useStyles()
  const planData = useContext(PlanContext)
  console.log(props);
  return (
    <div style={{marginBottom: "10vh"}}>
      <Tab message="Home"/>
      <Grid container className={classes.rowOneContainer}>
        <Grid item xs={11} sm={10}>
          <Grid container style={{justifyContent: "center"}}>
            <Grid xs={6} sm={6} md={6}>
              <VideoPlayer />
            </Grid>
            <Grid xs={6} sm={6} md={6} style={{backgroundColor: "white", }}>
              <Link to="/about" className="no-decoration">
                <div className={`${classes.homeAboutContainer} `}>
                  <div className={classes.textHolder}>
                    LearningLab is a modern online school that can offer interactive language classes with native-speaking teachers to you child. Our focus on learning through gamification, which is on the cutting edge of language education, ensures learning that's meaningful, permanent, and fun. Classes are held completely online through our lightning-fast platform. Our platform gives students a completely different online-class experience. Students don't simply watch a screen, but have the ability to inteact with class content. Teachers host games that focus on teaching concepts, vocabulary, and grammar. We believe in teaching in a much more interactive way.
                  </div>
                  <div className={"read-more"}>
                  Read More
                  </div>
                </div>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <PlanComparison props={props} homepage={true} benefits={[planData[1].benefits, planData[2].benefits, planData[3].benefits]} types={[planData[1].type, planData[2].type, planData[3].type]} />
      <QuestionPrompt props={props}/>
    </div>
  )
}

export default HomePage
