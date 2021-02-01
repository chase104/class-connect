import React, { useState, useEffect } from 'react'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
  contentContainer:{
    height: "90%",
    paddingTop: "4vh",
    paddingLeft: "5vw",
    paddingRight: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    paddingBottom: "5vh",
    backgroundColor: "white",
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
    marginTop: "5vh"
  },
  summaryTitle:{
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "1vh",
    marginTop: "4vh",
    width: "fit-content"
  },
  sectionTitle:{
    marginRight: "8px",
    fontWeight: "bold"
  },
  calendarHolder:{
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "fit-content"
  },
  summaryContainer:{
     backgroundColor: "white"
  },
  summaryColumnHolder:{
    marginBottom: "4vh"
  },
  summaryColumn:{
    marginTop: "5vh"
  },
  columnContent:{
    marginLeft:"10%",
  },
  displayButtonHolder: {
    display: "flex !important",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "5vw",
    marginBottom: "5vw",
    width: "fit-content",
    alignItems: "center",

  },
  displayButton:{
    backgroundColor: "#4c1fcd",
    color: "white",
    fontWeight: "bold",
    fontSize: "larger",
  },
  noDisplay: {
    display: "none !important"
  }

}))

const Content = ({ youState, studentState, planState, appLocation, changeState, submitApplication }) => {
  const classes = useStyles()


  let tempAnswers = {}







  const [tempAnswersState, setTempAnswersState] = useState(tempAnswers)
  const [resetState, setResetState] = useState(true)
  const [calendarValue, changeCalendar] = useState(new Date());
  const [selectValues, setSelectValues] = useState({
    country: [
      { value: "US", title: "USA" },
      { value: "UK", title: "UK" },
      { value: "France", title: "France" },
      { value: "Germany", title: "Germany" },
      { value: "China", title: "China" },
      { value: "Spain", title: "Spain" },
  ],
    nationality: [
      { value: "US", title: "USA" },
      { value: "UK", title: "UK" },
      { value: "French", title: "French" },
      { value: "German", title: "German" },
      { value: "Chinese", title: "Chinese" },
      { value: "Spain", title: "Spanish" },
    ],
    relation: [
      { value: "Parent", title: "Parent" },
      { value: "Guardian", title: "Guardian" },
      { value: "Other", title: "Other" },
    ],
    plan: [
      { value: "Recruit", title: "New Recruit $25" },
      { value: "Archer", title: "Archer $390" },
      { value: "Knight", title: "Knight $495" },
      { value: "Wizard", title: "Wizard $695" },
    ],
    level: [
      { value: "Complete Beginner", title: "Complete Beginner" },
      { value: "Beginner", title: "Beginner" },
      { value: "Experienced Beginner", title: "Experienced Beginner" },
      { value: "Lower-intermediate", title: "Lower-intermediate" },
      { value: "Intermediate", title: "Intermediate" },
      { value: "Upper-Intermerdiate", title: "Upper-Intermerdiate" },
      { value: "Advanced", title: "Advanced" },
    ]

  })
  const [arrowToggle, setArrowToggle] = useState(true)
  let calendarId

    useEffect(() => {
      setResetState(!resetState)
    }, [appLocation])




    useEffect(() => {

      const arrowIcon = document.getElementById('arrow-icon')
      if (appLocation[0] == 3){
        console.log("yes effect");
        let boolean = true
        let moveIcon = () => {
           boolean = !boolean
          setArrowToggle(boolean)
        }
        setInterval(function(){
          moveIcon()
        }, 1000)
      }
    }, [appLocation])

    useEffect(() => {
      if (calendarId){
        console.log(calendarValue);
        changeState({
          [calendarId]: `${calendarValue}`
        })
      }

    }, [calendarValue])


  const handleSelectChange = (e) => {
    setTempAnswersState({
      ...tempAnswersState,
      [e.target.name]: e.target.value
    })
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
    console.log(e.target.key);
  }
  const handleCalendarChange = () => {
    console.log(calendarValue);

  }

  const returnTitle = () => {
    return (
      appLocation[0] == 0 ?
        <div className={classes.pageTitle}>{youState[appLocation[1]][0].label}</div>
        :
        appLocation[0] == 1 ?
        <div className={classes.pageTitle}>{studentState[appLocation[1]][0].label}</div>
        :
        appLocation[0] == 2 ?
        <div className={classes.pageTitle}>{planState[appLocation[1]][0].label}</div>
        :
        <div className={classes.pageTitle}>Review</div>
    )


  }

  const iteratePage = (page) => {
    let pageContents = []
    for (var i=0; i<page.length; i++){
     let pageItem
     if (page[i].type == "title"){
       pageItem = (<div className={classes.summaryTitle}>{page[i].label}</div>)
     } else {
       pageItem = (
         <div style={{display: "flex", alignItems: "center", justifyContent: "start"}}>
            <div className={classes.sectionTitle}>{page[i].label + ": "}</div>

            <div>{page[i].answer != null ? page[i].answer : "no answer"}</div>
         </div>
       )
     }
     pageContents.push(pageItem)
    }
    return pageContents
  }

  const returnSummary = (type) => (
    <div>
      {
        type == "you" ?
        youState.map((page)=>{
          return iteratePage(page)
        })
        : type == "student" ?
        studentState.map((page)=>{
          return iteratePage(page)
        })
        :
        planState.map((page)=>{
          return iteratePage(page)
        })
      }
    </div>
  )

  const returnForm = () => {
    return (
      <form className={classes.form}>
        {
          appLocation[0] == 0 ?

            youState[appLocation[1]].map((component) => {
              console.log("SELECTING COMPONENT TYPE", component.type);
              if (component.type == "input") {
                  return (
                      <TextField variant="outlined" label={component.label} id={component.location} key={component.location} className={classes.shortWidth} value={tempAnswersState[component.location]} onClick={(e) => handleInputClick(e)}  onChange={(e) => handleInputChange(e)}></TextField>
                  )
              } else if (component.type == "select") {
                return (
                  <FormControl className={classes.shortWidth}>
                    <InputLabel id="demo-simple-select-filled-label" variant="outlined">{component.label}</InputLabel>
                    <Select labelId="demo-simple-select-filled-label"
                      id={component.location}
                      key={component.location}
                      name={component.location}
                      value={tempAnswersState[component.location]}
                      onChange={(e) => handleSelectChange(e)}
                      onClick={(e) => console.log(e.target, component.location)}
                    >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {selectValues[component.key].map((object) => (
                      <MenuItem value={object.value}>{object.title}</MenuItem>

                    ))}
                     </Select>
                  </FormControl>
                )
              } else if (component.type == "calendar") {
                console.log("calendar select");
                return (
                  <Calendar
                    onChange={(e) => handleCalendarChange(e)}
                    value={calendarValue}
                  />
                )
              }
            })
            :
          appLocation[0] == 1 ?
            studentState[appLocation[1]].map((component) => {
              if (component.type == "input") {
                  console.log("item: ", component.label, component.location);
                  return (
                      <TextField variant="outlined" label={component.label} id={component.location} key={component.location} className={classes.shortWidth} value={tempAnswersState[component.location]} onClick={(e) => handleInputClick(e)}  onChange={(e) => handleInputChange(e)}></TextField>
                  )
              } else if (component.type == "select") {
                return (
                  <FormControl className={classes.shortWidth}>
                    <InputLabel id="demo-simple-select-filled-label" variant="outlined">{component.label}</InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id={component.location}
                      key={component.location}
                      name={component.location}
                      value={tempAnswersState[component.location]}
                      onChange={(e) => handleSelectChange(e)}
                    >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>

                    {selectValues[component.key].map((object) => {
                      return (<MenuItem value={object.value}>{object.title}</MenuItem>)

                    })}
                     </Select>
                  </FormControl>
                )
              }  else if (component.type == "calendar") {
                console.log("calendar select");
                return (
                  <Calendar
                    onChange={handleCalendarChange}
                    value={calendarValue}
                  />
                )
              }
            })
          :

            planState[appLocation[1]].map((component) => {
              console.log("SELECTING COMPONENT TYPE", component.type);

              if (component.type == "input") {
                console.log("its input");
                  return (
                      <TextField variant="outlined" label={component.label} id={component.location} key={component.location} className={classes.shortWidth} value={tempAnswersState[component.location]} onClick={(e) => handleInputClick(e)}  onChange={(e) => handleInputChange(e)}></TextField>
                  )
              } else if (component.type == "select") {
                return (
                  <FormControl className={classes.shortWidth}>
                    <InputLabel id="demo-simple-select-filled-label" variant="outlined">{component.label}</InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id={component.location}
                      key={component.location}
                      name={component.location}
                      value={tempAnswersState[component.location]}
                      onChange={(e) => handleSelectChange(e)}
                    >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {selectValues[component.key].map((object) => {
                      return <MenuItem value={object.value}>{object.title}</MenuItem>
                    })}
                    </Select>
                  </FormControl>
                )
              }  else if (component.type == "calendar") {
                console.log("calendar select");
                calendarId = (component.location)
                return (
                  <div className={classes.calendarHolder} id={"calendar"} key={component.location} value={component.location} onClick={(componentLocation) => handleCalendarChange(componentLocation)}>
                  <div>When would you like to start classes?</div>
                  <Calendar
                    onChange={changeCalendar}
                    value={calendarValue}
                  />
                  </div>

                )
              }
            })

          }
      </form>
    )


  }

  return (
    <div className={appLocation[0] == 3 ? classes.summaryContainer : classes.contentContainer}>
        {
          returnTitle()
        }
        {
          appLocation[0] == 3 ?
          <Grid container style={{display: "flex", marginBottom: "4vh",}}>
            <Grid xs={6} sm={6} md={4} className={classes.summaryColumn} >
              <div className={classes.columnContent}>
                {returnSummary("you")}
              </div>
            </Grid>
            <Grid xs={6} sm={6} md={4} className={classes.summaryColumn} >
              <div className={classes.columnContent}>
                {returnSummary("student")}
              </div>
            </Grid>
            <Grid xs={6} sm={6} md={4} className={classes.summaryColumn} >
              <div className={classes.columnContent}>
                {returnSummary("plan")}
              </div>
            </Grid>
          </Grid>

          :
          returnForm()
        }
        <div className={`${appLocation[0] == 3 ? classes.displayButtonHolder : classes.noDisplay}`}>
          <ArrowDownwardIcon fontSize="large" className={`${arrowToggle == true ? "arrow-up" : "arrow-down"}`} id="arrow-icon"/>
          <Button variant="contained" color="primary`" size="large" className={`${classes.displayButton} button-hover`} onClick={() => submitApplication()}>Submit</Button>
        </div>

    </div>
  )
}

export default Content
