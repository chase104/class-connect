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
    alignItems: "center",
    backgroundColor: "#e6e6e6"
  },
  button:{
    fontWeight: "bold",
    color: "white",
    fontSize: "16px",
    margin: "14px 0px"
  },
  displayHolder:{
    display:"flex",
    alignItems: "center",
  },
  displaybuttonHolder:{
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },
  displayButton: {
    display: "flex !important"
  },
  noDisplay: {
    display: "none !important"
  }
  }))

const BottomBar = ({ appLocation, numberOfPages, changeAppLocation }) => {

  const classes = useStyles()

  const [pagesArray, setPagesArray] = useState(false)
  const [hotPage, setHotPage] = useState()

  useEffect(() => {
    let tempArray = []
    for (var i=0; i < numberOfPages; i++){
      if (i == numberOfPages-1){
        tempArray.push(i)
        setPagesArray([...tempArray])
      } else {
        tempArray.push(i)
      }
    }
  }, [numberOfPages])


  const sectionProxyArray = [0,1,2,3]

  return (
    <div className={classes.barContainer}>
      <Button variant="contained" color="primary" className={classes.button} onClick={() => changeAppLocation("back")}>Back</Button>
      <div className={classes.displayHolder}>


        {
          pagesArray.length >= 1 ?
          pagesArray.map((number) => {
            if (number == appLocation[1]){
              return (
                <div style={{width: "fit-content"}} className={classes.displaybuttonHolder} id={number}>
                  <RadioButtonChecked />
                </div>
              )
            } else {
              return (
                <div style={{width: "fit-content"}} className={classes.displaybuttonHolder} id={number} onClick={() => changeAppLocation(number)}>
                  <RadioButtonUnchecked />
                </div>
              )
            }

          })
          :
          null
        }

      </div>
      {appLocation[0] == 3 ?
        <div></div>
        :
        <Button variant="contained" color="primary" className={classes.button} onClick={() => changeAppLocation("next")}>Next</Button>
       }

    </div>
  )
}

export default BottomBar
