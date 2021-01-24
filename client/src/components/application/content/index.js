import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
  contentContainer:{
    height: "90%",
    paddingTop: "4vh",
    paddingLeft: "5vw",
    paddingRight: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start"
  },
  form:{
    width: "100%",
    justifyContent: "left",
    display: "flex",
    flexDirection: "column"
  },
  shortWidth:{
    width: "40%",
    marginTop: "12px",
    [theme.breakpoints.down('xs')]: {
      width: "60%"
    }
  },
  pageTitle:{
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "5vh"
  }

}))

const Content = ({ youState, appLocation, changeState }) => {

  useEffect(() => {

    console.log(youState[appLocation[1]]);
  }, [])

  const classes = useStyles()

  const [country, setCountry] = useState()

  const handleSelectChange = (e) => {
    changeState({country: e.target.value})

  }
  const handleInputChange = (e) => {
    console.log(e);
    changeState({ [e.target.key] : e.target.value})
  }
  return (
    <div className={classes.contentContainer}>
      <div className={classes.pageTitle}>{youState[appLocation[1]][0].label}</div>
      <form className={classes.form}>

        {youState[appLocation[1]].map((component) => {
          console.log(component.key);
          if (component.type == "input") {
              return (
                <TextField variant="outlined" label={component.label} key={component.key} className={classes.shortWidth} onChange={(e) => handleInputChange(e)}></TextField>
              )
          } else if (component.type == "select" && component.key == "country") {
            return (
              <FormControl className={classes.shortWidth}>
                <InputLabel id="demo-simple-select-filled-label" variant="outlined">Country of residence</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={country}
                  onChange={handleSelectChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"US"}>USA</MenuItem>
                  <MenuItem value={"UK"}>UK</MenuItem>
                  <MenuItem value={"ES"}>Spain</MenuItem>
                  <MenuItem value={"FR"}>France</MenuItem>
                  <MenuItem value={"DE"}>Germany</MenuItem>
                  <MenuItem value={"CN"}>China</MenuItem>
                </Select>
              </FormControl>
            )
          }
        })}
      </form>
    </div>
  )
}

export default Content
