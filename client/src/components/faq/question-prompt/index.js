import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextareaAutosize } from '@material-ui/core';
import './styles.css'

const useStyles = makeStyles((theme) => ({
  promptContainer:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    backgroundColor: "white",
    fontWeight: "bold",
    fontSize: "24px",
border: "1px solid black",
padding: "16px"

},
submitButton: {
  backgroundColor: "#1565C0",
  color: "white",
  marginLeft: "auto"
},
emailHolder:{
  display: "flex",
  fontSize: "16px",
  marginBottom: "8px"
},
emailInput:{
  width: "20vw",
  [theme.breakpoints.down('xs')]: {
    width: "60vw"
  },
}
}))

const QuestionPrompt = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.promptContainer} style={{marginTop: "10vh"}}>
      <Grid item xs="10" sm="8" md="8" className={classes.innerContainer}>
        <div>Didn't find an answer to your question?</div>
        <div style={{fontWeight: "normal"}}>Ask it here!</div>
        <form>
        <Grid container style={{justifyContent: "center", marginTop: "5vh"}}>

           <Grid item xs="10" sm="8" md="8" className={classes.emailHolder}>
                <div style={{marginRight: "4px", minWidth: "fit-content"}}>Your Email: </div>
                <input type="text" className={classes.emailInput}/>
           </Grid>
           <Grid item xs="10" sm="8" md="8">
            <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Maximum 400 characters" style={{width: "100%"}}/>
           </Grid>
           <Grid item xs="10" sm="8" md="8" style={{display: "flex"}}>
            <Button className={`${classes.submitButton} button-hover`}>Submit</Button>
           </Grid>

          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}

export default QuestionPrompt
