import React, {useEffect} from 'react'
import './styles.css'
import { Container, Grid } from '@material-ui/core';
import Tab from '../../components/tab/index.js'
import { makeStyles } from '@material-ui/core/styles'

import ResourcesRow from '../../components/about-components/resources-row/index.js'
import ResourceRow from '../../components/about-components/resource-row/index.js'
import arrows from '../../assets/images/arrows.png'
import treasureMap from '../../assets/images/treasure-map.png'
import initials from '../../assets/images/initials.png'
import TextRow from '../../components/about-components/text-row/index.js'

const useStyles = makeStyles({
  rowOne:{
    maxHeight: "20vh",
    marginBottom: "30px"
  }
})

const About = () => {

const classes = useStyles()

  // scrolling to tab
  useEffect(() => {
      var top = document.getElementById("mytab").offsetTop; //Getting Y of target element
      window.scrollTo({
        top: top
      }); 
  }, [])

  return (
    <div className="about-container">
      <Tab message="About LearningLab"/>
      <Container>
        <TextRow image={initials} type="initials" rowId={"row-initials"} title="The Adventurer's College" subtitle="We've simplified education" key={"row-initials"}/>
        <TextRow image={treasureMap} type="about" rowId={"row-two"} title="Our Mission" subtitle="We dream big" key={"row-one"}/>
        <TextRow image={arrows} type="methodology" rowId={"row-three"} title="Methodology" subtitle="You're on solid ground" key={"row-two"}/>
        <ResourceRow type={"resource"} title={"Your Resources"} subtitle={"We've got your back"} key={"resource-one"}/>
        <ResourceRow type={"steps"} title={"First Steps"} subtitle={"Getting started is the important part"} key={"resource-two"}/>

      </Container>



    </div>
  )
}

export default About
