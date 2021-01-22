import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'

import './styles.css'
import Tab from '../../components/tab/index.js'
import { FormControl, Input, InputLabel, FilledInput } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    backgroundColor: "#1FC3CD !important",
    borderRadius: "15px",
    marginTop: "12px",
    minHeight: "20vh",
    boxShadow: "4px 4px 16px darkgrey",
  }
}))
const Login = () => {
  const classes = useStyles()
  return (
    <div className="about-container">
      <Tab message="Login"/>
      <Container maxWidth="sm" className={classes.loginContainer}>
        <FormControl>

        </FormControl>
      </Container>
    </div>
  )
}

export default Login
