import React from 'react'
import { Link } from 'react-router-dom'
import {Toolbar, AppBar, Typography} from '@material-ui/core';
import './styles.css'
import SignedInLinks from '../signed-in-links/index'
import SignedOutLinks from '../signed-out-links/index'

const Navbar = () => {
  return (
    <AppBar position="static">
        <Toolbar className="header-holder">
          <div className="header-one">
            <div className="app-title no-select">
              <Link to="/" className="no-decoration">
                Learning Lab
              </Link>
            </div>
          </div>
          <div className="header-two">

          </div>
          <div className="header-three">
            <SignedOutLinks />
          </div>

        </Toolbar>
    </AppBar>
  )
}

export default Navbar
