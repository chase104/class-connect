import React from 'react'
import { Link } from 'react-router-dom'
import {Toolbar, AppBar, Typography, Grid} from '@material-ui/core';
import './styles.css'
import SignedInLinks from '../signed-in-links/index'
import SignedOutLinks from '../signed-out-links/index'
import { makeStyles, useTheme } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  appTitle: {
    fontFamily: "'Audiowide', cursive !important",
    fontSize: "36px",
    [theme.breakpoints.down('xs')]: {
      fontSize: "24px"
    }
  },
  titleGridDiv: {
    display: "flex",
    justifyContent:"center",
    alignItems: "center"
  }
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position="static" color="primary">
        <Toolbar className="header-holder">
          <Grid container style={{height: "8vh"}}>
            <Grid item  xs={8} sm={7} className={classes.titleGridDiv}>
                <Link to="/" className="no-decoration">
                <Typography variant="h3" className={classes.appTitle}>
                    Learning Lab
                </Typography>
                </Link>
            </Grid>
            <Grid item sx={4} sm={5}>
              <SignedOutLinks />
            </Grid>
          </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
