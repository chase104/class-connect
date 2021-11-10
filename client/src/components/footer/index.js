import React, { useState, useEffect } from 'react'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FlareIcon from '@material-ui/icons/Flare';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    width: "100%",
    backgroundColor: "#1FC3CD",
    minHeight: "fit-content",
    marginTop: "auto"

  },
  gridContainer: {
    minHeight: "inherit",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "12px"
  },
  footerBlock:{
    height: "100%",
    textAlign: "left",
    color: "white",
    marginTop: "16px",
    marginBottom: "8px",
    [theme.breakpoints.down('xs')]: {
      marginTop: "4px",
      marginBottom: "4px",
    }
  },
  footerTitle: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "white"
  },
  listHolder: {
    fontSize: "20px",
    [theme.breakpoints.down('xs')]: {
      fontSize: "16px",
      marginLeft: "8px"
    }
  },
  centerItems:{
    display: "flex",
    alignItems: "center",
    marginTop: "4px"
  }

}))
const Footer = () => {
  const classes = useStyles()

  const [blinkerState, setBlinkerState] = useState(true)
  const [effectInterval, setEffectInterval] = useState(true)

  useEffect(() => {
    setInterval(function(){
      setBlinkerState(false)
      setTimeout(function(){
        setBlinkerState(true)
      }, 150)
    }, 1000)
  }, [])

  return (
    <div className={classes.footerContainer} style={{
}}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={10} sm={3} md={3} className={classes.footerBlock} style={{}}>
          <div className={classes.footerTitle}>APP By Chase Van Halen</div>
          <div className={classes.listHolder}>
            <div className="email-holder">
              <div>chase.vanhalen88</div>
              <div>@gmail.com</div>
            </div>
            <div className="link-hover"><a href="https://www.linkedin.com/in/chase-van-halen-8068a5108/" target="_blank" className={`no-decoration ${classes.centerItems}`} >LinkedIn <ExitToAppIcon className="exit-icon" /></a> </div>
            <div className="link-hover"><a href="https://github.com/chase104/class-connect" target="_blank" className={`no-decoration ${classes.centerItems}`}>GitHub <ExitToAppIcon className="exit-icon" /></a></div>
          </div>
        </Grid>
        <Grid item xs={10} sm={3} md={3} className={`${classes.footerBlock} middle-div`} style={{}}>
        <div  className={classes.footerTitle}>Other Apps By Chase</div>
        <div className={classes.listHolder}>
          <div className="link-hover"><a href="https://stream-simply.herokuapp.com/" target="_blank" className={`no-decoration ${classes.centerItems}`}>Stream Simply<ExitToAppIcon className="exit-icon" /></a></div>
        </div>
        </Grid>
        <Grid item xs={10} sm={3} md={3} className={classes.footerBlock} style={{marginLeft: "12px"}}>
        <div  className={classes.footerTitle}>Is Chase Available For A Job?</div>
        <div className="blinker-holder">
          <div className="blinker-icon"></div>
          <div className="available-color">Yes</div>
        </div>
        <div className={classes.listHolder}>
          <div style={{color: "white", }}>Full Stack Developer</div>
          <div style={{color: "white", }}>Front-End / Back-End</div>
          <div className="link-hover"><a href="https://vanhalen-portfolio.herokuapp.com/" target="_blank" className={`no-decoration ${classes.centerItems}`}>Portfolio <ExitToAppIcon className="exit-icon"/></a></div>

        </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
