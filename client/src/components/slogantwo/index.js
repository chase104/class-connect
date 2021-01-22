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

  const [display, setDislay] = useState(null)
  useEffect(() => {
    console.log("change detected");
    if(props.location.pathname != "/pdfpage" && display != "flex"){
      console.log("met condition");
      setDislay(true)
    } else {

      console.log("non-met");
      setDislay(false)
    }
  }, [props.location.pathname])




  return (
    <Grid container id="slogan-container" justify="center" style={{borderBottom: "1px solid #1FC3CD", backgroundColor: "white", paddingTop: "8px"}} className={display == true ? "flex-display" : "null-display"}>
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
