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
  const classes = useStyles()

  useEffect(() => {
    console.log(youState[appLocation[1]]);
  }, [])

  let tempAnswers = {}

  youState[appLocation[1]].map((component) => {
    tempAnswers = {
      ...tempAnswers,
      [component.location]: component.answer
    }
  })



  const [selectState, setSelectState] = useState()
  const [tempAnswersState, setTempAnswersState] = useState(tempAnswers)
useEffect(() => {
  console.log(tempAnswersState);
}, [])

  const handleSelectChange = (e) => {

    changeState({
      [e.target.name]: e.target.value
    })
  }

  const handleInputChange = (e) => {
    setTempAnswersState({
      ...tempAnswersState,
      [e.target.id]: e.target.value
    })
    console.log(tempAnswers);
    changeState({
      [e.target.id]: e.target.value
    })
  }
  const handleInputClick = (e) => {
    console.log(e.target);
  }

  return (
    <div className={classes.contentContainer}>
      <div className={classes.pageTitle}>{youState[appLocation[1]][0].label}</div>
      <form className={classes.form}>

        {youState[appLocation[1]].map((component) => {
          if (component.type == "input") {
              return (
                  <TextField variant="outlined" label={component.label} id={component.location} key={component.location} className={classes.shortWidth} value={tempAnswersState[component.location]} onClick={(e) => handleInputClick(e)}  onChange={(e) => handleInputChange(e)}></TextField>
              )
          } else if (component.type == "select") {

            let optionsDiv = null

            switch(component.key){
              case "country":
                optionsDiv = (
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id={component.location}
                    key={component.location}
                    value={selectState}
                    name={component.key}
                    onChange={(e) => handleSelectChange(e)}
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
                )
                break;
              case "nationality":
                optionsDiv = (
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id={component.location}
                    key={component.location}
                    value={selectState}
                    name={component.key}
                    onChange={(e) => handleSelectChange(e)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"US"}>USA</MenuItem>
                    <MenuItem value={"UK"}>UK</MenuItem>
                    <MenuItem value={"ES"}>Spanish</MenuItem>
                    <MenuItem value={"FR"}>French</MenuItem>
                    <MenuItem value={"DE"}>German</MenuItem>
                    <MenuItem value={"CN"}>Chinese</MenuItem>
                  </Select>
                )
                break;
              case "relation":
                optionsDiv = (
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id={component.location}
                    key={component.location}
                    value={selectState}
                    onChange={handleSelectChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"US"}>Parent</MenuItem>
                    <MenuItem value={"UK"}>Guardian</MenuItem>
                    <MenuItem value={"ES"}>Other</MenuItem>
                  </Select>
                )
            }

            return (
              <FormControl className={classes.shortWidth}>
                <InputLabel id="demo-simple-select-filled-label" variant="outlined">{component.label}</InputLabel>
                 {optionsDiv}
              </FormControl>
            )
          }
          }
        )}
      </form>
    </div>
  )
}

export default Content
