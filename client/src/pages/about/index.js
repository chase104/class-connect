import React, {useEffect} from 'react'
import './styles.css'
import { Container, Grid } from '@material-ui/core';
import Tab from '../../components/tab/index.js'
import { makeStyles } from '@material-ui/core/styles'

import ResourcesRow from '../../components/about-components/resources-row/index.js'
import arrows from '../../assets/images/arrows.png'
import treasureMap from '../../assets/images/treasure-map.png'
import TextRow from '../../components/about-components/text-row/index.js'

const useStyles = makeStyles({
  rowOne:{
    maxHeight: "20vh",
    marginBottom: "30px"
  }
})

const About = () => {

const classes = useStyles()

  return (
    <div className="about-container">
      <Tab message="About LearningLab"/>
      <Container>
        <TextRow image={treasureMap} rowId={"row-one"} title="LearningLab" subtitle="We've simplified education"/>
        <TextRow image={arrows} rowId={"row-two"} title="Our Methodology" subtitle="You're on solid ground"/>
        <ResourcesRow />
      </Container>



    </div>
  )
}

export default About
