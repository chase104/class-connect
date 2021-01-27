import React, { useState, useEffect } from 'react'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  tabsContainer:{

  },
  tab:{
    fontSize: "24px",
    padding: "8px 0px",
    backgroundColor: "#d9d9d9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('xs')]: {
      fontSize: "16px"
    },
  }
}))



const TabBar = ({ appLocation }) => {
  const classes = useStyles()

  useEffect(() => {
    setLocation(appLocation[0])
  }, [appLocation])

  const [location, setLocation] = useState(null)

  return (
    <Grid container className={classes.tabsContainer}>
      <Grid item xs={3} sm={3}  className={`${classes.tab} tab no-select ${location == 0 ? "highlight" : null}`} >
        YOU
      </Grid>
      <Grid item xs={3} sm={3} className={`${classes.tab} tab no-select ${location == 1 ? "highlight" : null}`}>
        STUDENT
      </Grid>
      <Grid item xs={3} sm={3} className={`${classes.tab} tab no-select ${location == 2 ? "highlight" : null}`}>
        PLAN
      </Grid>
      <Grid item xs={3} sm={3} className={`${classes.tab} tab no-select ${location == 3 ? "highlight" : null}`}>
        <div style={{padding: "0px 4px"}}>REVIEW & SUBMIT</div>

      </Grid>
    </Grid>
  )
}

export default TabBar
