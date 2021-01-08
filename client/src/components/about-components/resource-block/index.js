import React, {useState} from 'react'
import { Grid } from '@material-ui/core';
import './styles.css'


const Resource = ({title, image, classes, style}) => {

  const [mouseDown, setMouseDown] = useState(false)

  const handleMouseDown = () => {
    console.log("downed");
    setMouseDown(true)
  }
  const handleMouseUp = () => {
    console.log("mouseUp");
  setMouseDown(false)
  }

  return (
    <Grid item xs={4} sm={2} className={`${classes.resourceContainer} resource-block ${mouseDown ? 'lighter-box' : null}`}  onMouseDown={() => handleMouseDown()} onMouseUp={() => handleMouseUp()} onMouseOut={() => handleMouseUp()}>
      <div style={{fontWeight: "bold", color: "white"}}>{title}</div>
      <img src={image} className={classes.resourceImg} style={style}/>
    </Grid>
  )
}

export default Resource
