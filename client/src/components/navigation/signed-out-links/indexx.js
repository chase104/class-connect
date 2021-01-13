import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { PostAdd as PostAddIcon, AssignmentTurnedIn as AssignmentTurnedInIcon} from '@material-ui/icons';
import {Typography, Grid} from '@material-ui/core';



import { IconButton } from '@material-ui/core';
import { AccountBox as AccountCircleIcon, Notifications as NotifiationsIcon, NotificationImportantIcon as NewNotificationIcon } from '@material-ui/icons';
import './styles.css'

const SignedOutLinks = () => {






  return (
    <div className="icon-group-holder">



      <div className="icon-holder" >
        <Link to="/about" className="no-decoration">
        <div className="title-icon-holder">
          <h4 className="navbar-icon no-select no-margin">
            PLANS
          </h4>
          <div className="small-icons-holder">
              <AssignmentTurnedInIcon fontSize="small"/>
              <AssignmentTurnedInIcon fontSize="small"/>
              <AssignmentTurnedInIcon fontSize="small"/>
          </div>
        </div>

        </Link>
      </div>

      <div className="icon-holder" >
        <Link to="/about" className="no-decoration">
          <div className="title-icon-holder">
            <h4 className="navbar-icon no-select no-margin" >
              APPLY
            </h4>
            <PostAddIcon />
          </div>
        </Link>
      </div>

      <div className="icon-holder" >
        <Link to="/about" className="no-decoration">
          <h4 className="navbar-icon no-select">
            ABOUT
          </h4>
        </Link>
      </div>
      <div className="icon-holder" >
        <Link to="/login" className="no-decoration">
          <h4 className="navbar-icon no-select">
            LOGIN
          </h4>
        </Link>
      </div>
    </div>
  )
}

export default SignedOutLinks
