import React from 'react'
import Container from '@material-ui/core/Container';
import './styles.css'
import Tab from '../../components/tab/index.js'
import { FormControl, Input, InputLabel, FilledInput } from '@material-ui/core';


const Login = () => {
  return (
    <div className="about-container">
      <Tab message="Login"/>
      <Container maxWidth="sm" className="login-container">
        <FormControl>

        </FormControl>
      </Container>
    </div>
  )
}

export default Login
