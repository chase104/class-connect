import React, {useState, useEffect} from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import arrows from '../../../assets/images/arrows.png'
import './styles.css'
import { IconButton, Typography } from '@material-ui/core';
import {ExpandLess, ChevronRight, ExpandMore} from '@material-ui/icons/';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  rowOneContainer: {
    maxHeight: "24vh",
  },
  rowOneImage: {
    minWidth: "100%",
    maxWidth: "inherit",
    maxHeight: "24vh",
    minHeight: "24vh",
            boxShadow: "14px 10px 10px #4d4d4d",
  },
  rowOneTextHolder:{
    backgroundColor: "white",
    color: "black",
    maxHeight:"24vh",
    overflow: "hidden",
    boxShadow: "10px 10px 10px #4d4d4d",
    borderRadius: "0px 10px 10px 0px"
},
  rowOneText:{
    padding: "0px 14px"
  },
rowOneTitleDiv:{
  marginRight: "auto",
  marginTop: "8px",
  display: "flex",
  width: "100%"
},

upButton:{
  marginLeft: "auto",
  marginRight: "4%",
},
paper: {
  height: "inherit",
  backgroundColor: "blue"
},
iconButton:{
  marginLeft: "auto",
  marginRight: "20px",
  boxShadow: "0px 0px 36px black",
    marginTop: "4px",
    color: "white",
},
rowTitleHolder:{
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  color: "black",
  backgroundColor: "white",
  borderRadius: "10px 0 0 10px",
  padding: "0px 4px",
  boxShadow: "-10px 12px 14px darkslategrey",
  display: "flex",
  flexDirection: "column",
},
rowTitle: {
  fontFamily: "'Audiowide', cursive !important",
  fontSize: "24px",
  [theme.breakpoints.down('xs')]: {
    fontSize: "18px"
  }
},
rowSubtitle: {
  fontFamily: "'Oswald' !important",
  fontSize: "18px",
  [theme.breakpoints.down('xs')]: {
    fontSize: "14px"
  }
},
titleHolderDiv:{
  display: "flex",
flexDirection: "column",
alignItems: "center",
width: "fit-content",
background: "white",
padding: "8px 24px",
borderRadius: "10px 10px 0px 0px",
boxShadow: "4px -4px 10px darkslategrey",
alignItems: "center",

},

}))




const TextRow = ({image, rowId, title, subtitle}) => {
  const classes = useStyles()


  const [dropdownActive, setDropdownActive] = useState(false)
  const [mouseDown, setMouseDown] = useState(false)

  const handleBarClick = (e) => {
    console.log("clicked");
    console.log(e);
    const rowText = document.getElementById(rowId)
    console.log(rowText.style.maxHeight);
    if (rowText.style.maxHeight=="fit-content") {
      console.log("already has");
      rowText.style.maxHeight = "24vh"
      rowText.style.borderRadius = "0px 10px 10px 0px"
    } else {
      console.log("doesn't have");
      rowText.style.maxHeight = "fit-content"
      rowText.style.position = "relative"
      rowText.style.zIndex = "1"
      rowText.style.borderRadius = "0px 10px 10px 10px"


    }
    setDropdownActive(!dropdownActive)
  }


    const handleMouseDown = () => {
      console.log("downed");
      setMouseDown(true)
    }
    const handleMouseUp = () => {
      console.log("mouseUp");
    setMouseDown(false)
    }

  return (
    <div style={{margin: "30px 5% 30px 5%"}}>
      <div className={classes.titleHolderDiv}>
        <div className={classes.rowTitle}>{title}</div>
        <div className={classes.rowSubtitle}>{subtitle}</div>
      </div>
      <Grid container className={classes.rowOneContainer}>
        <Grid container style={{maxHeight: "24vh"}}>
          <Grid item sm={2} xs={3} style={{display: "flex"}}>
            <img src={image} className={classes.rowOneImage} style={{backgroundColor: "white", borderRadius: "0px 0px 0px 10px"}}/>
          </Grid>
          <Grid item xs={9} s={9} md={9}>
            <Grid container>
              <Grid item xs={12} s={12} m={12}>
                <div className={`${classes.rowOneTextHolder} text-area`} id={rowId} onClick={(e) => handleBarClick(e)} onMouseDown={() => handleMouseDown()} onMouseUp={() => handleMouseUp()} onMouseOut={() => handleMouseUp()}>
                  <div className={`${classes.rowOneText} ${mouseDown ? 'lighter' : null}`}>
                    Ubi qui despicationes o litteris ne labore admodum ubi elit consequat e quae enim, minim admodum ita despicationes. Veniam excepteur a multos quem a de dolore aliqua anim laboris se admodum enim anim eiusmod quae, admodum et mandaremus, fugiat appellat id fugiat summis, sed culpa firmissimum, deserunt et minim iudicem aut nescius quis malis de dolor. Nostrud praesentibus id eiusmod.Possumus summis quid proident export, summis occaecat iis singulis, do quorum pariatur efflorescere aut cillum eiusmod eu elit nulla, incurreret fore noster do ipsum, noster possumus hic eruditionem, veniam est admodum, ita elit tempor ex proident. Aut duis ipsum se nescius. Anim an arbitror de fore ab veniam incididunt offendit iis malis ubi incididunt aut litteris iis enim, ea multos elit ipsum admodum quo quid admodum e illum fugiat, an si cohaerescant o incurreret ad legam cupidatat.
                  </div>
                </div>
              </Grid>
          </Grid>
        </Grid>
      </Grid>



      </Grid>
      </div>

  )
}

export default TextRow
