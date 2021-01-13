import React, {useState, useEffect} from 'react'
import { Grid } from '@material-ui/core';
import './styles.css'


const Resource = ({title, image, classes, style, type, openModal, id}) => {

  const [mouseDown, setMouseDown] = useState(false)
  const [styles, setStyles] = useState(null)
  const [titleStyles, setTitleStyles] = useState(null)
  useEffect(() => {
    console.log(type);
    if (type == "resource") {
      setStyles({
        backgroundColor: "#1565c0"
      })
      setTitleStyles({
        fontWeight: "bold",
        color: "white"
      })
    } else {
      setStyles({
        backgroundColor: "white",
        color: "black",
      })
      setTitleStyles({
        fontWeight: "bold",
        color: "black"
      })
    }
  }, [])


  const handleMouseDown = () => {
    console.log("downed");
    setMouseDown(true)
  }
  const handleMouseUp = () => {
    console.log("mouseUp");
  setMouseDown(false)
  }
  const handleOpen = () => {
    console.log("opening");
  }

  return (
    <Grid item xs={4} sm={type == "resource" ? 2 : 2} id={id} style={styles} className={`${classes.resourceContainer} resource-block no-select ${mouseDown ? type == "resource" ? 'lighter-box' : 'grey-box' : null}`} onClick={(e) => openModal(e)}  onMouseDown={() => handleMouseDown()} onMouseUp={() => handleMouseUp()} onMouseOut={() => handleMouseUp()}>
      <div style={titleStyles} id={id}>{title}</div>
      <img src={image} id={id} className={classes.resourceImg} style={style}/>
    </Grid>
  )
}

export default Resource
