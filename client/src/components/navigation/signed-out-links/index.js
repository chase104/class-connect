import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import { IconButton, Typography, Grid } from '@material-ui/core';

import { PostAdd as PostAddIcon, AssignmentTurnedIn as AssignmentTurnedInIcon} from '@material-ui/icons';
import { 
    AccountBox as AccountCircleIcon,
    Notifications as NotifiationsIcon,
    NotificationImportantIcon as NewNotificationIcon,
    Info as InfoIcon,
    AccountBox as AccountBoxIcon,
   } from '@material-ui/icons';



const SignedOutLinks = () => {

  return (
    <div className="icon-group-holder">
      <Grid container className="navbar-grid">

        <Grid item sm={3}>
          <Link to="/plans" className="no-decoration">
            <div className="icon-holder">
              <div className="title-icon-holder">
                <h4 className="navbar-icon no-select no-margin">
                  PLANS
                </h4>
                <div className="small-icons-holder">
                    <AssignmentTurnedInIcon className="plan-icon"  fontSize="small" style={{color: "white"}}/>
                </div>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item sm={3}>
          <Link to="/application" className="no-decoration">
          <div className="icon-holder" >
            <div className="title-icon-holder">
              <h4 className="navbar-icon no-select no-margin" >
                APPLY
              </h4>
              <PostAddIcon style={{color: "white"}}/>
            </div>
          </div>
          </Link>
        </Grid>
        <Grid item sm={3}>
          <Link to="/about" className="no-decoration">
          <div className="icon-holder" >
            <div className="title-icon-holder">
              <h4 className="navbar-icon no-select no-margin" >
                ABOUT
              </h4>
              <div className="small-icons-holder">
                    <InfoIcon className="plan-icon"  fontSize="small" style={{color: "white"}}/>
                </div>
            </div>
          </div>
          </Link>
        </Grid>
        <Grid item sm={3}>
          <Link to="/login" className="no-decoration">
          <div className="icon-holder" >
            <div className="title-icon-holder">
              <h4 className="navbar-icon no-select no-margin" >
                LOGIN
              </h4>
              <div className="small-icons-holder">
                    <AccountBoxIcon className="plan-icon"  fontSize="small" style={{color: "white"}}/>
                </div>
            </div>
          </div>
          </Link>
        </Grid>



      </Grid>
    </div>
  )
}

export default SignedOutLinks
