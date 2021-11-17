import React, {useEffect} from 'react'
import './styles.css'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import classNames from 'classnames'


const useStyles = makeStyles((theme) => ({
  tab:{
    fontSize: "30px",
    fontFamily: "'Audiowide', cursive !important",
    background: "#1FC3CD",
    borderRadius: "0px 0px 20px 20px",
    color: "white",
    paddingBottom: "4px",
    marginTop: "-4px",
    width: "auto",
    padding: "4px 48px",
        boxShadow: "4px 4px 10px #4d4d4d",
    [theme.breakpoints.down('xs')]: {
      fontSize: "20px",
      width: "100%",
      marginLeft: "10px",
      padding: "4px 0px"
    }
  },
  tabHolder:{
    display: "flex",
    justifyContent: "center"
  },
  admin:{
    background: "#4c1fcd !important"
  },
  super:{
    background: "#cd911f !important"
  }
}))


const Tab = ({message, superAdmin, admin}) => {


  const classes = useStyles();

  return (
    <Grid container  justify="end" id="mytab">
      <Grid item xs={6} sm={6} className={classes.tabHolder}>
        <div className={superAdmin == true ? classNames(classes.tab, classes.super) : admin == true ? classNames(classes.tab, classes.admin)  : classes.tab}>{message}</div>
      </Grid>
      <Grid item xs={2} sm={2}>
      </Grid>
      <Grid item xs={3} sm={3}>
      </Grid>
    </Grid>
  )
}

export default Tab
