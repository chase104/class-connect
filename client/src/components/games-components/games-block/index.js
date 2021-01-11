import React, {useState, useEffect} from 'react'
import { Grid } from '@material-ui/core';
import './styles.css'


const IndividualGame = ({classes, image, id}) => {

  const [mouseDown, setMouseDown] = useState(false)

  useEffect(() => {

  }, [])


  const handleMouseDown = () => {
    console.log("downed");
    setMouseDown(true)
  }
  const handleMouseUp = () => {
    console.log("mouseUp");
  setMouseDown(false)
  }


  return (
            <Grid item xs={3} sm={3} className={` no-select ${classes.gameBlock} ${id % 2 == 0 ? "yes" : "no"} ${mouseDown ? (id % 2 == 0) ? 'darker-blue' : 'lighter-blue' : null}` } onMouseDown={() => handleMouseDown()} onMouseUp={() => handleMouseUp()} onMouseOut={() => handleMouseUp()}>
                <div className="game-image-container">
                  <img src={image} className={`${classes.gameImage} game-image`} />
                </div>
              </Grid>
  )
}

export default IndividualGame
