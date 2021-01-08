import React from 'react'
import './styles.css'
import { Grid, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  tab:{
    fontSize: "30px",
    background: "rgba(21, 101, 192, 1)",
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
  }
}))

const Tab = ({message}) => {
  const classes = useStyles();
  console.log(classes.tab);
  console.log(message);
  return (
    <Grid container  justify="end">
      <Grid item xs={7} sm={7} className={classes.tabHolder}>
        <div className={classes.tab}>{message}</div>
      </Grid>
      <Grid item xs={2} sm={2}>
      </Grid>
      <Grid item xs={3} sm={3}>
      </Grid>
    </Grid>
  )
}

export default Tab
