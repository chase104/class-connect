import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tab from '../../components/tab/index.js'
import {Grid} from '@material-ui/core';
import './styles.css'
import tractorGame from '../../assets/images/game-tractor.png'
import spaceGame from '../../assets/images/game-space.png'
import horseGame from '../../assets/images/game-horse.png'
import houseGame from '../../assets/images/game-house.png'
import dragonGame from '../../assets/images/game-dragon.png'
import coffeeGame from '../../assets/images/game-coffee.png'
import pizzGame from '../../assets/images/game-pizz.png'
import motorGame from '../../assets/images/game-motor.png'
import treeGame from '../../assets/images/game-tree.png'
import dollGame from '../../assets/images/game-doll.png'
import headphonesGame from '../../assets/images/game-headphones.png'
import wizardGame from '../../assets/images/game-wizard.png'
import worldGame from '../../assets/images/game-world.png'
import swordGame from '../../assets/images/game-sword.png'
import sandwichGame from '../../assets/images/game-sandwich.png'

import IndividualGame from '../../components/games-components/games-block/index.js'

const useStyles = makeStyles((theme) => ({
  gamesPage:{
    width: "70%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
  },
  gamesContainer:{
    display: "flex",

  },

  unitOne:{
    marginTop: "5vh",
  },
  unitBar: {
    borderRadius: "10px 10px 0px 0px",
    color: "white",
    marginBottom: "30px"
  },
  unitTitle:{
    backgroundColor: "#1565c0",
  textAlign: "start",
  marginLeft: "4vh",
  fontSize: "20px",
  display: "flex",
  justifyContent: "center",
  padding: "4px",
  borderRadius: "10px 10px 0px 0px",
  position: "relative",
  boxShadow: "4px -3px 10px grey",
  fontWeight: "bold",
  letterSpacing: "2px",

},
gameBlock:{
  height: "15vh",
  display: "flex",

},
gameImage:{
  height: "11vh",
  width: "auto"
}
}))


const Games = () => {
  const classes = useStyles()


  const [games, setGames] = useState([
    [null, {id: 1, image: tractorGame}, {id: 2, image: spaceGame}, {id: 3, image: horseGame}, {id: 4, image: houseGame},
       {id: 5, image: dragonGame}, {id: 6, image: coffeeGame}, {id: 7, image: pizzGame}, {id: 8, image: motorGame},
        {id: 9, image: treeGame}, {id: 10, image: dollGame}, {id: 11, image: headphonesGame}, {id: 12, image: wizardGame}],
    [null, {id: 12, image: worldGame}, {id: 12, image: swordGame}, {id: 12, image: sandwichGame}, {id: 12, image: wizardGame}],
    [null, {id: 17}, {id: 18}, {id: 19}, {id: 20}, {id: 21}, {id: 22}],
    [null, {id: 23}, {id: 24}]
  ])

  const [splitUnits, setSplitUnits] = useState(null)

  console.log(Object.keys(games).length);


  const [unitsToMap, setUnitsToMap] = useState([0, 1, 2, 3])
  const [mouseDown, setMouseDown] = useState(false)


  useEffect(() => {
    const stateArray = [ [], [], [], [] ]
    for (var j=0; j < unitsToMap.length; j++) {
      let tempArray = []
      for (var i = 1; i < games[j].length; i++) {
        if (i == games[j].length -1 || Number.isInteger(i/4)) {
          console.log("breakpoint, ", j, i);
          tempArray.push(games[j][i])
          stateArray[j].push([...tempArray])
          tempArray = []
        } else {
          tempArray.push(games[j][i])
        }
      }
      console.log(stateArray);
      setSplitUnits([...stateArray])
    }

  }, [])


  const handleMouseDown = () => {
    console.log("downed");
    setMouseDown(true)
  }
  const handleMouseUp = () => {
    console.log("mouseUp");
  setMouseDown(false)
  }


  return (
    <div className={classes.gamesPage}>
      <Tab message="Games"/>
      <div className={classes.unitContainers} style={{marginTop: "30px"}}>
        {
        unitsToMap ? unitsToMap.map((unit) => {
    return (<Grid container className={classes.unitBar}>
              <Grid item xs={4} sm={3} className={classes.unitTitle}>Unit {unit+1}</Grid>
              {
                splitUnits ?
                splitUnits[unit].map((block) => {

          return  <Grid container>
                      {
                        block.map((game) => {
                return  <IndividualGame classes={classes} image={game.image} id={game.id}/>
                        })
                      }
                  </Grid>

                })
                 : null
              }
            </Grid>)
          })
          :
          null
        }
      </div>

    </div>
  )
}

export default Games
