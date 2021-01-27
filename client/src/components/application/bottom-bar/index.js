import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import {RadioButtonUnchecked} from '@material-ui/icons/';
import {RadioButtonChecked} from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  barContainer:{
    height: "10%",
    display: "flex",
    justifyContent:" space-evenly",
    padding: "0px 8px",
    alignItems: "center",
    backgroundColor: "#d9d9d9"
  },
  button:{
    fontWeight: "bold",
    color: "white",
    fontSize: "16px"
  },
  displayHolder:{
    display:"flex"
  },
  displaybuttonHolder:{
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  }
  }))

const BottomBar = ({ appLocation, numberOfPages, changeAppLocation }) => {

  const classes = useStyles()
  console.log(appLocation, numberOfPages);

  const [pagesArray, setPagesArray] = useState(false)
  const [hotPage, setHotPage] = useState()

  useEffect(() => {
    console.log("useEffecting", numberOfPages);
    let tempArray = []
    for (var i=0; i < numberOfPages; i++){
      console.log("looping");
      if (i == numberOfPages-1){
        tempArray.push(i)
        console.log("setting pages", tempArray);
        setPagesArray([...tempArray])
      } else {
        console.log("pushing");
        tempArray.push(i)
      }
    }
  }, [numberOfPages])



  console.log(pagesArray);

  return (
    <div className={classes.barContainer}>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => changeAppLocation("back")}>Back</Button>
      <div className={classes.displayHolder}>
        {
          pagesArray ?
          pagesArray.map((number) => {
            if (number == appLocation[1]){
              return (
                <div style={{width: "fit-content"}} className={classes.displaybuttonHolder} id={number}>
                  <RadioButtonChecked />
                </div>
              )
            }
            return (
              <div style={{width: "fit-content"}} className={classes.displaybuttonHolder} id={number} onClick={() => changeAppLocation(number)}>
                <RadioButtonUnchecked />
              </div>
            )
          })
          :
          null
        }
      </div>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => changeAppLocation("next")}>Next</Button>
    </div>
  )
}

export default BottomBar
