import React, { useEffect, useState } from 'react'
import './styles.css'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  sloganTitle: {
    fontSize: "24px !important",
    [theme.breakpoints.down('xs')]: {
      fontSize: "18px !important"
    }
  }

}))

const Slogan = (props) => {
  console.log("slogan ", props);
  const classes = useStyles()
  //history check
  const [overlay, setOverlay] = useState(null)
  useEffect(() => {
    console.log("slogan location", props.location.pathname);
    if (props.location.pathname == "/"){
      setOverlay("placeholder-div")
    } else {
      setOverlay("placeholder-div blue-overlay")
    }
    console.log(overlay);
  }, [props.location.pathname])



  return (
    <Grid container  justify="center" style={{borderBottom: "1px solid #1565c0"}}>
      <Grid item xs={1} sm={2}>
        <div  className="slogan-div"></div>
      </Grid>
      <Grid item xs={10} sm={8}>
        <div  className="slogan-div title-slogan-div">
          <Typography variant="h4" style={{fontWeight: "bold"}} className={classes.sloganTitle}>Paving the way forward</Typography>
          <Typography>Quality, convenience, and consistency are our guarentee</Typography>
        </div>
      </Grid>
      <Grid item xs={1} sm={2}>
        <div className="slogan-div"></div>
      </Grid>
    </Grid>

  )
}

export default Slogan
