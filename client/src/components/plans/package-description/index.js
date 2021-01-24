import React from 'react'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import { CheckCircleOutline as CheckCircle}  from '@material-ui/icons/';


const useStyles = makeStyles((theme) => ({
  descriptionContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5vh"
  },
  innerContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    minHeight: "20vh"
  },
  packageTab:{
    width: "fit-content",
    backgroundColor: "#1FC3CD",
    padding: "4px 24px",
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
    borderRadius: "10px 10px 0px 0px",
    boxShadow: "6px 0px 12px darkslategrey",
  },
  benefitItem:{
    display: "flex",
    marginLeft: "5%",
    marginTop: "4px",
    marginBottom: "4px"
  },
  CheckCircle:{
    color: "#01AA31"
  },
  image: {
    width: "100%"
  },
  imageHolder: {
    display: "flex",
    alignItems: "center",
    height: "100%"
  },
  description: {
    textAlign: "justify",
    padding: "0px 8px"
}

}))

const PackageDescription = ({type, image, benefits, price, description, }) => {

  const classes = useStyles()
  console.log(type, benefits, price, description);
  return (
    <div className={classes.descriptionContainer}>
      <Grid container style={{justifyContent: "center"}}>
        <Grid item xs={11} sm={10} style={{display: "flex",}}>
          <div className={classes.packageTab}>{type}</div>
          <div className={classes.packageTab}>{"$ " +price}</div>
        </Grid>
        <Grid item xs={11} sm={10} md={10} style={{border: "1px solid black"}}>
          <Grid container className={classes.innerContainer}>
            <Grid item xs={4} sm={4} md={4} style={{paddingTop: "12px"}}>
              {benefits.map((benefit) => {
                return <div className={classes.benefitItem}>
                        <div>
                            <CheckCircle className={classes.CheckCircle}/>
                        </div>
                        <div>
                          {benefit}
                        </div>
                      </div>
              })}
            </Grid>
            <Grid item xs={3} sm={2} md={2} >
              <div className={classes.imageHolder}>
                <img src={image} className={classes.image} />
              </div>
            </Grid>
            <Grid item xs={5} sm={6} md={6} >
              <div className={classes.description}>{description}</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default PackageDescription
