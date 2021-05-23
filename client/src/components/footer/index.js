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
    minHeight: "inherit",
    height: "100%",
    textAlign: "left",
    color: "white",
    marginTop: "16px",
    marginBottom: "8px",
  },
  footerTitle: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "white"
  },
  listHolder: {
    fontSize: "1.6vw",
    [theme.breakpoints.down('xs')]: {
      fontSize: "20px",
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
            <div>chase.vanhalen88@gmail.com</div>
            <div className="link-hover"><a href="https://www.linkedin.com/in/chase-van-halen-8068a5108/" target="_blank" className={`no-decoration ${classes.centerItems}`} >LinkedIn <ExitToAppIcon /></a> </div>
            <div className="link-hover"><a href="https://github.com/chase104" target="_blank" className={`no-decoration ${classes.centerItems}`}>GitHub <ExitToAppIcon /></a></div>
          </div>
        </Grid>
        <Grid item xs={10} sm={3} md={3} className={`${classes.footerBlock} middle-div`} style={{}}>
        <div  className={classes.footerTitle}>Other Apps By Chase</div>
        <div className={classes.listHolder}>
          <div className="link-hover"><a href="https://github.com/chase104" target="_blank" className={`no-decoration ${classes.centerItems}`}>FreeFinance <ExitToAppIcon /></a></div>
          <div className="link-hover"v><a href="https://github.com/chase104" target="_blank" className={`no-decoration ${classes.centerItems}`}>A Kitchen's Cookbook <ExitToAppIcon /></a></div>
          <div className="link-hover"><a href="https://github.com/chase104" target="_blank" className={`no-decoration ${classes.centerItems}`}>CodingParadise <ExitToAppIcon /></a></div>
          <div className="link-hover"><a href="https://github.com/chase104" target="_blank" className={`no-decoration ${classes.centerItems}`}>Local Business Hub <ExitToAppIcon /></a></div>
        </div>
        </Grid>
        <Grid item xs={10} sm={3} md={3} className={classes.footerBlock} style={{marginLeft: "12px"}}>
        <div  className={classes.footerTitle}>Is Chase Available For A Job?</div>
        <div className="blinker-holder">
        {blinkerState ? <FlareIcon  className="blinker-icon"/> : <RemoveIcon className="blinker-icon"/>}
        <div className="available-color">Yes</div>
        </div>
        <div className={classes.listHolder}>
          <div style={{color: "white", }}>Full Stack Developer</div>
          <div style={{color: "white", }}>Front-End / Back-End</div>
          <div className="link-hover"><a href="https://github.com/chase104" target="_blank" className={`no-decoration ${classes.centerItems}`}>Portfolio <ExitToAppIcon /></a></div>

        </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
